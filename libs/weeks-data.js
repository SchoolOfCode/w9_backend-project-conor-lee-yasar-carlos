const weeks = {
    week1: [
      {
        day: 1,
        resources: [
          {
            id: 301,
            topic: 'HTML basics',
            url: 'https://www.youtube.com/watch?v=qz0aGYrrlhU',
            rating: true
          
          }
        ],
        list: [
          {
            id: 101,
            topic: 'HTML, elements and attributes ',
            weekend:true,
            completed: true,
            rating: 0
         },
         {
          id: 1012,
          topic: 'HTML, class and ids',
          weekend: true,
          completed: true,
          rating: 0
       }
        ]
      },
      {
        day: 2,
        resources: [
          {
            id: 702,
            topic: 'CSS, basics',
            url: 'https://www.youtube.com/watch?v=1PnVor36_40',
            rating: true
          
          }
        ],
        list: [
          {
            id: 102,
            topic: 'CSS syntax and selectors',
            weekend: true,
            completed: true,
            rating: 0
            
          },
          {
            id: 1022,
            topic: 'backgrounds, borders and margins',
            weekend: true,
            completed: false,
            rating: 0
            
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
          
          }
        ],
        list: [
          {
            id: 103,
            topic: 'data types and variables',
            weekend:true,
            completed:true,
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
          
          }
        ],
        list: [
          {
            id: 104,
            topic: 'objects and arrays',
            weekend:false,
            completed:false,
            rating: 0,
            
          },
          {
            id: 1042,
            topic: 'loops and if statements',
            weekend:false,
            completed:true,
            rating: 0,
            
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
            rating: true
          
          }
        ],
        list: [
          {
            id: 105,
            topic: 'fetch',
            weekend:false,
            completed:true,
            rating: 0,
            
          },
          {
            id: 1052,
            topic: 'change HTML elements',
            weekend:true,
            completed:true,
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
            rating: true
          
          
          }
        ],
        list: [
          {
            id: 106,
            topic: 'node modules',
            weekend:true,
            completed:true,
            rating: 0,
          },
          {
          id: 1062,
          topic: 'http modules',
          weekend:true,
          completed:true,
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
            rating: true
          
          }
        ],
        list: [
          {
            id: 107,
            topic: 'request handlers',
            weekend:true,
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
            rating: true
          
          }
        ],
        list: [
          {
            id: 108,
            topic:' postgres',
            weekend:true,
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
            rating: true
          
          }
        ],
        list: [
          {
            id: 109,
            topic: 'relational databases',
            weekend:true,
            completed:true,
            rating: 0,
            comments:"hard to follow"
            
            
          },
          {
            id: 1092,
            topic: 'non relational databases',
            weekend:true,
            completed:true,
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
            rating: true
          
          }
        ],
        list: [
          {
            id: 1001,
            topic: 'CRUD operations',
            weekend:true,
            completed:true,
           rating: 0,
            
          },
          {
            id: 10012,
            topic: 'scaling operations',
            weekend:true,
            completed:true,
            rating: 0,
            
          }
        ]
      }
    ]
  }
  export default weeks