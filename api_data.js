define({ "api": [
  {
    "type": "delete",
    "url": "api/enroll",
    "title": "Drop/Cancel",
    "name": "Drop_Cancel",
    "group": "Enrollment",
    "description": "<p>Drop or cancel a Canvas users by course id and array of  Interet Ids</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Specify the course to delete user(s)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>User IDs value (Internet ids)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Individual",
          "content": "//  Request input params\n\n[{\n  'course_id': 1234,\n  'users': ['smith101']\n}]\n\n// Success-Response\n[{\n    'course_id': 1234,\n    'dropped': [{\n      'enrol_id': 539553,\n      'internet_id': 'smith101',\n      'enrollment_state': 'deleted',\n      'updated_at': '2017-11-09T16:46:14Z'\n    }],\n    'errors': []\n}]",
          "type": "json"
        },
        {
          "title": "Multiple Individual",
          "content": "//  Request input params\n\n[{\n  'course_id': 1234,\n  'users': ['joe101', 'jane101']\n}]\n\n//  Success Response\n[{\n    'course_id': 1234,\n    'dropped': [\n      {\n        'enrol_id': 539553,\n        'internet_id': 'joe101',\n        'enrollment_state': 'deleted',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539554,\n        'internet_id': 'jane101',\n        'enrollment_state': 'deleted',\n        'updated_at': '2017-11-09T16:46:14Z'\n      }\n    ],\n    'errors': []\n}]",
          "type": "json"
        },
        {
          "title": "Failure",
          "content": "// Request input params Multiple Individual with a user 'jill11' that is not enrolled in course 1234\n\n[{\n  'course_id': 1234,\n  'users': ['joe101', 'jill11']\n}]\n\n// Failure Response\n[{\n  'course_id': 1234,\n  'dropped': [\n    {\n      'enrol_id': 54944,\n      'internet_id': 'joe101',\n      'enrollment_state': 'deleted',\n      'updated_at': '2017-11-09T16:49:49Z'\n    }\n  ],\n  'errors': [\n    {\n      'context': 'user',\n      'message': 'Not enrolled',\n      'users': ['jill11']\n    },\n  ]\n}]",
          "type": "json"
        },
        {
          "title": "Failure 2",
          "content": "// Failure with invalid course 4567\n\n[{\n  'course_id': 4567,\n  'users': ['joe101']\n}]\n\n// Failure Response\n[{\n  'course_id': 4567,\n  'dropped': [],\n  'errors': [\n    {\n      'context': 'course',\n      'message': 'The specified resource does not exist.',\n    },\n  ]\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "dropped object - For each user, a successfull drop has the below attributes": [
          {
            "group": "dropped object - For each user, a successfull drop has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>The Canvas course id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "enroll_id",
            "description": "<p>The Canvas enroll id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop has the below attributes",
            "type": "String",
            "optional": false,
            "field": "internet_id",
            "description": "<p>Users internet id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop has the below attributes",
            "type": "String",
            "optional": false,
            "field": "enrollment_state",
            "description": "<p>The state of the user's enrollment in the course.</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop has the below attributes",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>The updated time user dropped , in ISO8601 format</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "error object - For each user, or course, if an error is encountered, the below attributes are sent": [
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "context",
            "description": "<p>The context of the error either 'user' or 'course'</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The error message</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of  Interet Ids that were not found in the University's System only shows for context user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/enroll/routes.js",
    "groupTitle": "Enrollment"
  },
  {
    "type": "put",
    "url": "api/enroll",
    "title": "Enroll",
    "name": "Enroll_user",
    "group": "Enrollment",
    "description": "<p>Use to enroll users to Canvas by Canvas course id and internet id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Specify the course to add user(s) to</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>User IDs value (Internet ids)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Individual",
          "content": "//  Request input params\n\n[{\n  'course_id': 1234,\n  'users': ['smith101']\n}]\n\n// Success-Response\n[{\n    'course_id': 1234,\n    'enrolled': [{\n      'enrol_id': 539553,\n      'internet_id': 'smith101',\n      'enrollment_state': 'active',\n      'updated_at': '2017-11-09T16:46:14Z'\n    }],\n    'errors': []\n}]",
          "type": "json"
        },
        {
          "title": "Multiple Individual",
          "content": "//  Request input params\n\n[{\n  'course_id': 1234,\n  'users': ['joe101', 'jane101', 'jon4']\n}]\n\n//  Success Response\n[{\n    'course_id': 1234,\n    'enrolled': [\n      {\n        'enrol_id': 539553,\n        'internet_id': 'joe101',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539554,\n        'internet_id': 'jane101',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539555,\n        'internet_id': 'jon4',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      }\n    ],\n   'errors': []\n}]",
          "type": "json"
        },
        {
          "title": "Multiple Courses and Individuals",
          "content": "//  Request input params\n\n[{\n  'course_id': 1234,\n  'users': ['joe101', 'jane101', 'jon4']\n},\n{  'course_id': 6789,\n  'users': ['john55', 'moot23', 'matt101']\n}]\n\n//  Success Response\n[{\n    'course_id': 1234,\n    'enrolled': [\n      {\n        'enrol_id': 539553,\n        'internet_id': 'joe101',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539554,\n        'internet_id': 'jane101',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539555,\n        'internet_id': 'jon4',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      }\n    ],\n   'errors': []\n},\n{\n    'course_id': 1234,\n    'enrolled': [\n      {\n        'enrol_id': 539556,\n        'internet_id': 'john55',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539557,\n        'internet_id': 'moot23',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      },\n      {\n        'enrol_id': 539558,\n        'internet_id': 'matt101',\n        'enrollment_state': 'active',\n        'updated_at': '2017-11-09T16:46:14Z'\n      }\n    ],\n   'errors': []\n}]",
          "type": "json"
        },
        {
          "title": "Failure",
          "content": "// Request input params Multiple Individual with a user 'jill11' that is not enrolled in course 1234\n\n[{\n  'course_id': 1234,\n  'users': ['joe101', 'jill11']\n}]\n\nFailure Response\n[{\n 'course_id': 47788,\n  'enrolled': [\n    {\n      'enrol_id': 55542,\n      'internet_id': 'joe101',\n      'enrollment_state': 'active',\n      'updated_at': '2017-11-09T16:49:49Z'\n    }\n  ],\n  'errors': [\n    {\n      'context': 'user',\n      'message': 'Not found',\n      'users': ['jill11']\n    }]\n}]",
          "type": "json"
        },
        {
          "title": "Failure 2",
          "content": "// Request input params invalid course\n\n[{\n  'course_id': 42232,\n  'users': ['joe101', 'jill11']\n}]\n\nFailure Response\n[{\n 'course_id': 42232,\n  'enrolled': []\n  'errors': [\n    {\n      'context': 'course',\n      'message': 'The specified resource does not exist'\n    }]\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "enrolled object - For each user, a successfull enrollment has the below attributes": [
          {
            "group": "enrolled object - For each user, a successfull enrollment has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>The Canvas course id</p>"
          },
          {
            "group": "enrolled object - For each user, a successfull enrollment has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "enroll_id",
            "description": "<p>The Canvas enroll id</p>"
          },
          {
            "group": "enrolled object - For each user, a successfull enrollment has the below attributes",
            "type": "String",
            "optional": false,
            "field": "internet_id",
            "description": "<p>Users internet id</p>"
          },
          {
            "group": "enrolled object - For each user, a successfull enrollment has the below attributes",
            "type": "String",
            "optional": false,
            "field": "enrollment_state",
            "description": "<p>The state of the user's enrollment in the course.</p>"
          },
          {
            "group": "enrolled object - For each user, a successfull enrollment has the below attributes",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>The updated time user enrolled, in ISO8601 format</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "error object - For each user, or course, if an error is encountered, the below attributes are sent": [
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "context",
            "description": "<p>The context of the error either 'user' or 'course'</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The error message</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of  Interet Ids that were not found in the University's System only shows for context user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/enroll/routes.js",
    "groupTitle": "Enrollment"
  },
  {
    "type": "put",
    "url": "api/transfer",
    "title": "Transfer",
    "name": "Transfer_user",
    "group": "Enrollment",
    "description": "<p>Use to transfer Destiny users from one Canvas course to another by specifying the courses and users to drop from and the courses and users to enroll to</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>Specify the course to add user(s) to</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>User IDs value (Internet ids)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Individual",
          "content": "//  Request input params\n\n[{\n  'user': 'moot23',\n  'drop': 12345,\n  'enroll': 56789\n}]\n\n//  Success Response\n[{\n     'internet_id': 'moot23',\n    'dropped': {\n      'enroll_id': 539567,\n      'course_id': 12345,\n      'enrollment_state': 'deleted',\n      'updated_at': '2017-11-09T16:53:38Z',\n      'error': {},\n    },\n    'enrolled': {\n      'enroll_id': 539567,\n      'course_id': 12345,\n      'enrollment_state': 'active',\n      'updated_at': '2017-11-09T16:53:38Z',\n      'error': {}\n    }],\n}]",
          "type": "json"
        },
        {
          "title": "Multiple",
          "content": "//  Request input params\n\n[{\n  'user': 'matt101',\n  'drop': 12345,\n  'enroll': 56789\n},\n{\n  'user': 'john55',\n  'drop': 123456,\n  'enroll': 56780\n}]\n\n//  Success Response\n[{\n  'internet_id': 'matt101',\n  'dropped': {\n    'enroll_id': 539567,\n    'course_id': 12345,\n    'enrollment_state': 'deleted',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  },\n  'enrolled': {\n    'enroll_id': 539567,\n    'course_id': 12345,\n    'enrollment_state': 'active',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  }],\n},\n{\n  'internet_id': 'john55',\n  'dropped': {\n    'enroll_id': 539568,\n    'course_id': 123456,\n    'enrollment_state': 'deleted',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  },\n  'enrolled': {\n    'enroll_id': 539567,\n    'course_id': 56780,\n    'enrollment_state': 'active',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  }],\n}]",
          "type": "json"
        },
        {
          "title": "Failure",
          "content": "// Attempting to drop a user that is not enrolled in the course\n//  Request input params\n\n[{\n  'user': 'moot23',\n  'drop': 12345,\n  'enroll': 56789\n}]\n\n// Failure Response:\n[{\n  'internet_id': 'moot23',\n  'dropped': {\n      'course_id': 12345\n      'error': {\n        'context': 'user',\n        'message': 'Not enrolled',\n        'users': ['moot23']\n      }\n  },\n  'enrolled': {\n    'enroll_id': 539568,\n    'course_id': 56789,\n    'enrollment_state': 'active',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  }\n}]",
          "type": "json"
        },
        {
          "title": "Failure 2",
          "content": "// Attempting to drop a user with invalid course\n//  Request input params\n\n[{\n  'user': 'moot23',\n  'drop': 8898,\n  'enroll': 56789\n}]\n\n// Failure Response:\n[{\n  'internet_id': 'moot23',\n  'dropped': {\n    'course_id': 8898\n    'error': {\n      'context': 'course',\n      'message': 'The specified resource does not exist.',\n    }\n  },\n  'enrolled': {\n    'enroll_id': 539569,\n    'course_id': 56789,\n    'enrollment_state': 'active',\n    'updated_at': '2017-11-09T16:53:38Z',\n     'error': {}\n  }\n}]",
          "type": "json"
        },
        {
          "title": "Failure 3",
          "content": "// Attempting to enrol a user with valid course to drop but invalid course to enroll\n//  Request input params\n\n[{\n  'user': 'moot23',\n  'drop': 12345,\n  'enroll': 89901\n}]\n\n//  Success Response\n[{\n  'internet_id': 'moot23',\n  'dropped': {\n    'enroll_id': 539567,\n    'course_id': 12345,\n    'enrollment_state': 'deleted',\n    'updated_at': '2017-11-09T16:53:38Z',\n    'error': {}\n  },\n  'enrolled': {\n    'course_id': 89901\n    'error': {\n      'context': 'course',\n      'message': 'The specified resource does not exist.',\n    }\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "dropped object - For each user, a successfull drop/enrollment has the below attributes": [
          {
            "group": "dropped object - For each user, a successfull drop/enrollment has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "course_id",
            "description": "<p>The Canvas course id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop/enrollment has the below attributes",
            "type": "Number",
            "optional": false,
            "field": "enroll_id",
            "description": "<p>The Canvas enroll id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop/enrollment has the below attributes",
            "type": "String",
            "optional": false,
            "field": "internet_id",
            "description": "<p>Users internet id</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop/enrollment has the below attributes",
            "type": "String",
            "optional": false,
            "field": "enrollment_state",
            "description": "<p>The state of the user's enrollment in the course.</p>"
          },
          {
            "group": "dropped object - For each user, a successfull drop/enrollment has the below attributes",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>The updated time user dropped/enrolled, in ISO8601 format</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "error object - For each user, or course, if an error is encountered, the below attributes are sent": [
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "context",
            "description": "<p>The context of the error either 'user' or 'course'</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The error message</p>"
          },
          {
            "group": "error object - For each user, or course, if an error is encountered, the below attributes are sent",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of  Interet Ids that were not found in the University's System only shows for context user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/enroll/routes.js",
    "groupTitle": "Enrollment"
  },
  {
    "type": "put",
    "url": "api/users/",
    "title": "Create/Update",
    "name": "Create_users",
    "group": "Users",
    "description": "<p>Create or update Canvas users by internet id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>user IDs value (Internet ids)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example",
          "content": "//  Request input params\n { users: ['matt101', 'smith101', 'jill11'}\n\n// Success Response\n[\n   {\n      'internet_id': 'matt101',\n       'updated_at': '2017-11-09T16:53:38Z',\n   },\n   {\n      'internet_id': 'smith101',\n       'updated_at': '2017-11-09T16:53:38Z',\n   },\n   {\n      'internet_id': 'jill11',\n       'updated_at': '2017-11-09T16:53:38Z',\n   },\n   'error': []\n]",
          "type": "json"
        },
        {
          "title": "Failure Example",
          "content": "//  Request input params\n { users: ['matt101', 'smith101', 'joe33'}\n\n// Failure Response:\n[\n   {\n      'internet_id': 'matt101',\n       'updated_at': '2017-11-09T16:53:38Z',\n   },\n   {\n      'internet_id': 'smith101',\n       'updated_at': '2017-11-09T16:53:38Z',\n   },\n  'error': {\n    'context': 'user',\n    'message': 'Not found',\n    'users': ['joe33']\n   }\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "user object - for each user, a successfull response returns the below attributes": [
          {
            "group": "user object - for each user, a successfull response returns the below attributes",
            "type": "String",
            "optional": false,
            "field": "internet_id",
            "description": "<p>Users internet id</p>"
          },
          {
            "group": "user object - for each user, a successfull response returns the below attributes",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>The updated time user created or updated, in ISO8601 format</p>"
          },
          {
            "group": "user object - for each user, a successfull response returns the below attributes",
            "type": "String[]",
            "optional": false,
            "field": "users_not_found",
            "description": "<p>Array of  Interet Ids that were not found in the University's System</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "error object - For each user, if an error is encountered, the below attributes are sent": [
          {
            "group": "error object - For each user, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "context",
            "description": "<p>The context of the error is 'user'</p>"
          },
          {
            "group": "error object - For each user, if an error is encountered, the below attributes are sent",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The error message</p>"
          },
          {
            "group": "error object - For each user, if an error is encountered, the below attributes are sent",
            "type": "String[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of  Interet Ids that were not found in the University's System only shows for context user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/api/users/routes.js",
    "groupTitle": "Users"
  }
] });
