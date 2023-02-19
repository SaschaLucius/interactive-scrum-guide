#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

rm src/lib/generated/guides.ts || true
rm src/lib/generated/tags.ts || true

for i in docs/*.md; do
    [ -f "$i" ] || break
    name="$(basename $i .md)"
    newGuideFileName="src/lib/generated/guides.ts"
    echo "export const $name = \`" >> $newGuideFileName
    cat "$i" >> $newGuideFileName
    echo "\`;" >> $newGuideFileName

    newTagsFileName="src/lib/generated/tags.ts"
    echo "export const $name = [" >> $newTagsFileName
    cat "$i" | \
    # remove tags []
    sed -e 's/\[[^][]*\]//g' | \
    # replace punctuation with newlines
    sed 's/[[:punct:]]/\n/g' | \
    # remove stopwords
    sed -e "$(cat $SCRIPT_DIR/rm-en-stopwords-anywhere.sed)" | \
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
