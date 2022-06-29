// Dummy data used by the frontend while we setup the connection with the database
// It is an object, with 'week<N>' propeties which themeselves are arrays of objects
// week = {
//  week<N>: [
//    {day, resources: [{}], list[{}]}, ...
//  ]
// }
const weeks = {
    week1: [
      {
        day: 1,
        resources: [
          {
            id: 301,
            topic: 'HTML basics',
            url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
            rating: false
            
          },
          {
            id: 3301,
            topic: 'HTML elements',
            url: 'https://www.w3schools.com/html/html_elements.asp',
            rating: false
          
          },
          {
            id: 3401,
            topic: 'HTML classes',
            url: 'https://www.w3schools.com/html/html_elements.asp',
            rating: false
          
          }
        ],
        list: [
          {
            id: 101,
            topic: 'HTML elements and attributes ',
            weekend:false,
            completed: false,
            rating: 0,
            comments: '',
         },
         {
          id: 1012,
          topic: 'HTML classes and ids',
          weekend: false,
          completed: false,
          rating: 0,
          comments: ''
       },
       {
        id: 1013,
        topic: 'HTML, styles',
        weekend: false,
        completed: false,
        rating: 0,
        comments: ''
     },
     {
      id: 1014,
      topic: 'HTML, links',
      weekend: false,
      completed: false,
      rating: 0,
      comments: ''
   }
        ]
      },
      {
        day: 2,
        resources: [
          {
            id: 702,
            topic: 'CSS basics',
            url: 'https://www.youtube.com/watch?v=1PnVor36_40',
            rating: false
          
          },
          {
            id: 7102,
            topic: 'CSS syntax',
            url: 'https://www.w3schools.com/css/css_syntax.asp',
            rating: false
          
          },
          {
            id: 7202,
            topic: 'CSS borders and margins',
            url: 'https://www.w3schools.com/css/css_border.asp',
            rating: false
          
          }
        ],
        list: [
          {
            id: 102,
            topic: 'CSS syntax and selectors',
            weekend: false,
            completed: false,
            rating: 0,
            comments: ''
            
          },
          {
            id: 1022,
            topic: 'backgrounds, borders and margins',
            weekend: false,
            completed: false,
            rating: 0,
            comments: ''
            
          },
          {
            id: 1023,
            topic: 'CSS selectors',
            weekend: false,
            completed: false,
            rating: 0,
            comments: ''
            
          },
          {
            id: 1024,
            topic: 'CSS fonts and icons',
            weekend: false,
            completed: false,
            rating: 0,
            comments: ''
            
          }
        ]
      },
      {
        day: 3,
        resources: [
          {
            id: 803,
            topic: 'Javascript intro',
            url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk&t=374s',
            rating: false
          
          },
          {
            id: 8103,
            topic: 'Javascript data types',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
            rating: false
          
          },
          {
            id: 8203,
            topic: 'Javascript variables',
            url: 'https://www.w3schools.com/js/js_variables.asp',
            rating: false
          
          }
        ],
        list: [
          {
            id: 103,
            topic: 'data types and variables',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"It was too technical. i would have liked a step by step guide"
            
          },
          {
            id: 1031,
            topic: 'Javascript operators',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"It was too technical. i would have liked a step by step guide"
            
          },
          {
            id: 1032,
            topic: 'Javascript functions',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"It was too technical. i would have liked a step by step guide"
            
          }
        ] 
      },
      {
        day: 4,
        resources: [
          {
            id: 904,
            topic: 'javascript intro part 2',
            url: 'https://www.youtube.com/watch?v=W6NZfCO5SIk&t=374s',
            rating: false
          
          },
          {
            id: 9104,
            topic: 'loops and if statements',
            url: 'https://www.youtube.com/watch?v=s9wW2PpJsmQ',
            rating: false
          
          },
          {
            id: 9204,
            topic: 'Javascript modules',
            url: 'https://www.youtube.com/watch?v=cRHQNNcYf6s',
            rating: false
          
          }
        ],
        list: [
          {
            id: 104,
            topic: 'objects and arrays',
            weekend:false,
            completed:false,
            rating: 0,
            comments: ''
          },
          {
            id: 1042,
            topic: 'loops and if statements',
            weekend:false,
            completed: false,
            rating: 0,
            comments: ''
          },
          {
            id: 1043,
            topic: 'javascript modules',
            weekend:false,
            completed: false,
            rating: 0,
            comments: ''
          },
          {
            id: 1044,
            topic: 'javascript json',
            weekend:false,
            completed: false,
            rating: 0,
            comments: ''
          }
        ]
      },
      {
        day: 5,
        resources: [
          {
            id: 205,
            topic: 'javascript continued',
            url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',
            rating: false
          
          },
          {
            id: 2105,
            topic: 'javascript classes',
            url: 'https://www.w3schools.com/js/js_classes.asp',
            rating: false
          
          },
          {
            id: 2205,
            topic: 'javascript styling guide',
            url: 'https://enlear.academy/5-best-javascript-style-guides-640485e7b630',
            rating: false
          
          }
        ],
        list: [
          {
            id: 105,
            topic: 'fetch',
            weekend:false,
            completed: false,
            rating: 0,
            comments: ''
          },
          {
            id: 1052,
            topic: 'change HTML elements',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"I would have prefered a practical"
          },
          {
            id: 1053,
            topic: 'Javascript classes',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"I would have prefered a practical"
          },
          {
            id: 1054,
            topic: 'Javascript styling guide',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"I would have prefered a practical"
          }
        ]
      },
    ],
    week2: [
      {
        day: 1,
        resources: [
          {
            id: 5406,
            topic: 'intro to node',
            url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4&t=8s',
            rating: false
          
          
          },
          {
            id: 5506,
            topic: 'http modules',
            url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4&t=8s',
            rating: false
          
          
          },
          {
            id: 5606,
            topic: 'node file systems',
            url: 'https://www.youtube.com/watch?v=QkwHP4d01xA',
            rating: false
          
          
          }
        ],
        list: [
          {
            id: 106,
            topic: 'node modules',
            weekend:false,
            completed: false,
            rating: 0,
          },
          {
          id: 1062,
          topic: 'http modules',
          weekend:false,
          completed: false,
          rating: 0,
        },
        {
          id: 1063,
          topic: 'node file system',
          weekend:false,
          completed: false,
          rating: 0,
        },
        {
          id: 1064,
          topic: 'node npm',
          weekend:false,
          completed: false,
          rating: 0,
        }
        ]
      },
      {
        day: 2,
        resources: [
          {
            id: 6507,
            topic: 'express',
            url: 'https://www.section.io/engineering-education/express/',
            rating: false
          
          },
          {
            id: 6607,
            topic: 'request handlers',
            url: 'https://codeforgeek.com/handle-get-post-request-express-4/',
            rating: false
          
          },
          {
            id: 6707,
            topic: 'postgres',
            url: 'https://www.youtube.com/watch?v=fZQI7nBu32M&t=348s',
            rating: false
          
          }
        ],
        list: [
          {
            id: 107,
            topic: 'request handlers',
            weekend:false,
            completed:false,
            rating: 0,
            
          }
        ]
      },
      {
        day: 3,
        resources: [
          {
            id: 508,
            topic: 'databases',
            url: 'https://www.youtube.com/watch?v=z2kbsG8zsLM',
            rating: false
          
          },
          {
            id: 5108,
            topic: 'create table',
            url: 'https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/',
            rating: false
          
          },
          {
            id: 5208,
            topic: 'alter table',
            url: 'https://www.postgresql.org/docs/current/sql-altertable.html',
            rating: false
          
          }
        ],
        list: [
          {
            id: 108,
            topic:' postgres',
            weekend:false,
            completed:false,
            rating: 0,
            
          },
          {
            id: 1081,
            topic:'create database',
            weekend:false,
            completed:false,
            rating: 0,
            
          },
          {
            id: 1082,
            topic:'drop table',
            weekend:false,
            completed:false,
            rating: 0,
            
          },
          {
            id: 1083,
            topic:'alter table',
            weekend:false,
            completed:false,
            rating: 0,
            
          }
        ]
      },
      {
        day: 4,
        resources: [
          {
            id: 409,
            topic: 'Heroku',
            url: 'https://www.youtube.com/watch?v=QTOkqzCTGxw',
            rating: false
          
          },
          {
            id: 4109,
            topic: 'relational databases',
            url: 'https://www.youtube.com/watch?v=OqjJjpjDRLc',
            rating: false
          
          }
        ],
        list: [
          {
            id: 109,
            topic: 'relational databases',
            weekend:false,
            completed: false,
            rating: 0,
            comments:"hard to follow"
            
            
          },
          {
            id: 1092,
            topic: 'non relational databases',
            weekend:false,
            completed: false,
            rating: 0,
            
            
          },
          {
            id: 1093,
            topic: 'heroku',
            weekend:false,
            completed: false,
            rating: 0,
            
            
          }
        ]
      },
      {
        day: 5,
        resources: [
          {
            id: 201,
            topic: 'Restful Apis',
            url: 'https://www.youtube.com/watch?v=lsMQRaeKNDk',
            rating: false
          
          },
          {
            id: 2201,
            topic: 'CRUD operations',
            url: 'https://www.youtube.com/watch?v=3isdcAEZoq0',
            rating: false
          
          },
          {
            id: 2101,
            topic: 'RESTful methods',
            url: 'https://docs.oracle.com/en/cloud/saas/enterprise-performance-management-common/prest/rest_api_methods.html',
            rating: false
          
          }
        ],
        list: [
          {
            id: 1001,
            topic: 'CRUD operations',
            weekend:false,
            completed: false,
           rating: 0,
            
          },
          {
            id: 10012,
            topic: 'scaling operations',
            weekend:false,
            completed: false,
            rating: 0,
            
          },
          {
            id: 10013,
            topic: 'RESTful methods',
            weekend:false,
            completed: false,
            rating: 0,
            
          }
        ]
      }
    ]
  }
  export default weeks