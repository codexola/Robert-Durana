"""Confirm GitHub serves the exact original photo bytes; never modify images.

Run from the repository root. Pass --all to include every project image as well.
This optional network check is not required during Vercel builds.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import sys
import urllib.request

root = Path(__file__).resolve().parents[1]
items = json.loads((root / 'content/photos.json').read_text())
if '--all' in sys.argv:
    items += json.loads((root / 'projects.json').read_text())

def verify(item):
    original = (root / item['source']).read_bytes()
    with urllib.request.urlopen(item['originalUrl'], timeout=60) as response:
        downloaded = response.read()
        assert response.headers.get_content_type() == 'image/png'
    assert hashlib.sha256(original).digest() == hashlib.sha256(downloaded).digest(), item['source']
    return item['source']

with ThreadPoolExecutor(max_workers=3) as executor:
    for source in executor.map(verify, items):
        print('Verified original:', source, flush=True)
print(f'{len(items)} original images verified byte for byte.')
