module.exports = {
  createSchema: (pages, config) => {
    return `
    type Query {
      pageByUid(uid: String!): Page
      pages: [Page]
    }
    
    type Page {
      html: String
      frontmatter: Frontmatter
      excerpt: String
      relativePath: String
      active: Boolean
    }
    
    type Frontmatter {
      title: String
      date: String
      layout: String
      desc: String
      uid: String
      header: Header
      features: [Feature]
    }
    
    type Header {
      title: String
      sub: String
    }
        
    type Feature {
      title: String
      body: String
      link: Link
    }
    
    type Link {
      label: String
      target: String
    }
  `
  } ,
  createRoot: (pages, config) => {
    return {
      pages: () => pages,
      pageByUid: args => pages.find(p => p.frontmatter.uid === args.uid)
    }
  }
}
