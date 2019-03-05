---
title: Stasis
uid: rootPage
desc: Stasis is a simple and easy to use static site generator
layout: base
header:
  title: Stasis
  sub: A static site generator that is simple and easy to use.
  code: npm i -g stasis-generator
query: '{
  pageByUid(uid: "docs") {
    frontmatter {
      features {
        title
        body
        link {
          label
          target
        }
      }
    }
  }
}'
---
