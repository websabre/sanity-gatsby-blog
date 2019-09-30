export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d91860277789466707b7749',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-oghyd6gz',
                  apiId: '68cdc55b-4b36-44ea-9622-8bd718c2828e'
                },
                {
                  buildHookId: '5d91860202b0c8a48e0de7e9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-odfq3z3q',
                  apiId: 'a458b8a0-dd0a-488f-bb87-4e9ffe46a31a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/websabre/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-odfq3z3q.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
