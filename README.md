# postgraphile-plugin-js-validation

Postgraphile Plugin that allows mutation validation before hitting the database. ✨

> ⚠️ Don't see this Plugin as an excuse to skip defining proper constraints in your database.

## Table of Contents
- [Introduction](#introduction)
- [Basic Usage](#basic-usage)
- [Usage With Yup](#usage-with-yup)
- [API Reference](/docs/modules.md)



## Introduction
TODO

## Basic Usage
---

```
npm install postgraphile-plugin-js-validation

or 

yarn add postgraphile-plugin-js-validation
```

```javascript
// import
import { ValidationPlugin, handleErrors } from "postgraphile-plugin-js-validation";

// start postgraphile
postgraphile(process.env.DATABASE_URL, schemaName, {
  // ... options here
  handleErrors: handleErrors(),
  appendPlugins: [
    ValidationPlugin({
      authUser: async (input) => {
        // your validation logic
	// return an error object or {} / undefined
        return {
          "email": "Email is required",
	  "password": "Password is required"
        };
      },
    }),
  ],
})
```

## Usage With Yup

```javascript
import { ValidationPlugin, handleErrors } from "postgraphile-plugin-js-validation";
import { YupValidator } from "postgraphile-plugin-js-validation/dist/YupValidator";

postgraphile(process.env.DATABASE_URL, schemaName, {
  // ... options here
  handleErrors: handleErrors("shape"),
  appendPlugins: [
    ValidationPlugin({
      authUser: YupValidator(
        async (info) =>
          yup.object().shape({
            email: yup.string().email().required("Email is required"),
            password: yup.string().required("Password is required")
          }),
        { abortEarly: false }
      ),
    }),
  ],
})
);
```

And here is how the result looks like.

```json
{
  "errors": [
    {
      "validation": {
        "email": "Email is required",
	"password": "Password is required",
      }
    }
  ],
  "data": {
    "authUser": null
  }
}
```



