#!/usr/bin/env python3
"""
Excalidraw LZ-String Compression Utility for Obsidian.

Usage:
    python3 compress_excalidraw.py encode <input.json> <output.excalidraw.md>
    python3 compress_excalidraw.py decode <input.excalidraw.md> <output.json>
    python3 compress_excalidraw.py wrap <compressed_string> <output.excalidraw.md>

Requires: pip3 install lzstring
"""

import sys
import json
import re

try:
    from lzstring import LZString
except ImportError:
    print("ERROR: lzstring not installed. Run: pip3 install lzstring")
    sys.exit(1)

lz = LZString()

TEMPLATE = """---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data

## Text Elements
%%
## Drawing
```compressed-json
{compressed}
```
%%"""


def encode_json_to_excalidraw(json_path: str, output_path: str):
    """Compress a JSON file into an Excalidraw .md file."""
    with open(json_path, 'r') as f:
        data = json.load(f)
    json_str = json.dumps(data)
    compressed = lz.compressToBase64(json_str)
    md_content = TEMPLATE.format(compressed=compressed)
    with open(output_path, 'w') as f:
        f.write(md_content)
    print(f"Written: {output_path} ({len(compressed)} chars compressed)")


def decode_excalidraw_to_json(excalidraw_path: str, output_path: str):
    """Extract and decompress JSON from an Excalidraw .md file."""
    with open(excalidraw_path, 'r') as f:
        content = f.read()
    match = re.search(r'```compressed-json\n(.*?)\n```', content, re.DOTALL)
    if not match:
        print("ERROR: No compressed-json block found")
        sys.exit(1)
    b64 = match.group(1).strip().replace('\n', '')
    decompressed = lz.decompressFromBase64(b64)
    data = json.loads(decompressed)
    with open(output_path, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"Written: {output_path} ({len(data.get('elements', []))} elements)")


def wrap_compressed_string(compressed: str, output_path: str):
    """Wrap an already-compressed string into the Excalidraw .md template."""
    md_content = TEMPLATE.format(compressed=compressed)
    with open(output_path, 'w') as f:
        f.write(md_content)
    print(f"Written: {output_path}")


def compress_dict(data: dict) -> str:
    """Compress a Python dict to LZ-String base64. Used programmatically."""
    json_str = json.dumps(data)
    return lz.compressToBase64(json_str)


def build_excalidraw_md(data: dict) -> str:
    """Build complete .excalidraw.md content from a Python dict."""
    compressed = compress_dict(data)
    return TEMPLATE.format(compressed=compressed)


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    cmd = sys.argv[1]
    if cmd == 'encode' and len(sys.argv) == 4:
        encode_json_to_excalidraw(sys.argv[2], sys.argv[3])
    elif cmd == 'decode' and len(sys.argv) == 4:
        decode_excalidraw_to_json(sys.argv[2], sys.argv[3])
    elif cmd == 'wrap' and len(sys.argv) == 4:
        wrap_compressed_string(sys.argv[2], sys.argv[3])
    else:
        print(__doc__)
        sys.exit(1)
