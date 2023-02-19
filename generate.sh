#!/bin/bash

rm src/routes/generated/guides.ts || true
rm src/routes/generated/tags.ts || true

for i in docs/*.md; do
    [ -f "$i" ] || break
    name="$(basename $i .md)"
    newGuideFileName="src/routes/generated/guides.ts"
    echo "export const $name = \`" >> $newGuideFileName
    cat "$i" >> $newGuideFileName
    echo "\`;" >> $newGuideFileName

    newTagsFileName="src/routes/generated/tags.ts"
    echo "export const $name = [" >> $newTagsFileName
    cat "$i" | \
    # remove tags []
    sed -e 's/\[[^][]*\]//g' | \
    # replace punctuation with newlines
    sed 's/[[:punct:]]/\n/g' | \
    # remove stopwords
    sed -e "$(cat rm-en-stopwords-anywhere.sed)" | \
    # remove leading and tailing whitespaces
    sed 's/^[ \t]*//;s/[ \t]*$//' | \
    # delete empty lines
    sed '/^[[:space:]]*$/d' | \
    # sort, uniq, ignore case
    sort -uf | \
    # add "<tag>",
    sed 's/\(.*\)/"\1",/g' >> $newTagsFileName
    echo "];" >> $newTagsFileName
done
