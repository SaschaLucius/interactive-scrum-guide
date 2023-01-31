#!/bin/bash

rm src/routes/interactive/generated/guides.ts || true

for i in docs/*.md; do
    [ -f "$i" ] || break
    name="$(basename $i .md)"
    newFileName="src/routes/interactive/generated/guides.ts"
    echo "export const $name = \`" >> $newFileName
    cat "$i" >> $newFileName
    echo "\`;" >> $newFileName
done
