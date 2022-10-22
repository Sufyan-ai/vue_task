
# Vue Task App

This sample is a fully functional CRUD app utilizing all capabilities found in the default Progress Data Service template. The user need to creat an account to access the system.
 It makes use of the V-data-table of the Vuetify UI DataSource to provide data to the app's table control, which, in turn, utilizes the Vuex action to access the data.

In addition, it provides the user with the ability to perform CUD operations (create, update, and delete).  In order to update or delete the selected row, the user then clicks on the "Edit" button which brings user to the edit detail view iin dialoge to perform updates or deletion of the row. To add a new row, the user can click on the add button found on the table.


## Security

The user need a login to access the dashboard routes.Route Guards are used to secure the routes so an unauthenticated user cannot access the routes. 
## Technoligies

Vue.js
Vuetify
Typescript
Vuex
## Run 

To run this project 

```bash
  npm run serve
```



See [Configuration Reference](https://cli.vuejs.org/config/).
