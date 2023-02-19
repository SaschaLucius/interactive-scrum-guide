#!/bin/bash

rm src/routes/interactive/generated/guides.ts || true
rm src/routes/interactive/generated/tags.ts || true

for i in docs/*.md; do
    [ -f "$i" ] || break
    name="$(basename $i .md)"
    newGuideFileName="src/routes/interactive/generated/guides.ts"
    echo "export const $name = \`" >> $newGuideFileName
    cat "$i" >> $newGuideFileName
    echo "\`;" >> $newGuideFileName

    newTagsFileName="src/routes/interactive/generated/tags.ts"
    echo "export const $name = [" >> $newTagsFileName
    cat "$i" | sed -e 's/\[[^][]*\]//g' | sed 's/[.,:!?]  */&\n/g' | sed -e "$(cat rm-en-stopwords-anywhere.sed)" | tr -d '[:punct:]' | sed 's/^[ \t]*//;s/[ \t]*$//' |  sed '/^[[:space:]]*$/d' | sort -uf | sed 's/\(.*\)/"\1",/g' >> $newTagsFileName
    echo "];" >> $newTagsFileName
done
