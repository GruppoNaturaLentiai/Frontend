#!/bin/bash

find . -type f \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "*/.cache/*" \
  -not -path "*/public/*" \
  -not -path "*/.gatsby/*" \
  -not -path "./content/*" \
  -not -name "package-lock.json" \
  -not -name "yarn.lock" \
  -not -name "*.png" \
  -not -name "*.jpg" \
  -not -name "*.jpeg" \
  -not -name "*.svg" \
  -not -name "*.ico" \
  -not -name "context_for_llm.txt" \
  -exec echo -e "Generated at $(date)" \; \
  -exec echo -e "\n========================================\nFILE: {}\n========================================\n" \; \
  -exec cat {} \; > context_for_llm.txt

echo "✅ Fatto! Il contesto è stato salvato in 'context_for_llm.txt'"
echo "⚠️  Attenzione: Se il file è molto grande, incollalo in più parti."