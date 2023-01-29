#!/bin/bash

for i in docs/*.md; do
    [ -f "$i" ] || break
    name="$(basename $i .md)"
    newFileName="src/routes/interactive/generated/$name.ts"
    echo "export const guide = \`" > $newFileName
    cat "$i" >> $newFileName
    echo "\`;" >> $newFileName
done
