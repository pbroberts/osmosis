
Books = new Meteor.Collection("Books");

Samples = new Meteor.Collection("Samples");

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

/*
TabularTables.Books = new Tabular.Table({
  name: "BookList",
  collection: Books,
  columns: [
              {data: "title", title: "Title"},
              {data: "author", title: "Author"},
              {data: "copies", title: "Copies Available"},
              {
                data: "lastCheckedOut",
                title: "Last Checkout",
                render: function (val, type, doc) {
                  if (val instanceof Date) {
                    return moment(val).calendar();
                  } else {
                    return "Never";
                  }
                }
              },
              {data: "summary", title: "Summary"},
              {
                tmpl: Meteor.isClient && Template.bookCheckOutCell
              }
            ]
});
*/


/*with meteor running, in a separate cmd window navigate to mongodb/bin folder
mongoimport -h localhost:3001 --db meteor --collection Samples --type csv
--file C:\Users\probe009\meteor\demo2015\data.csv --headerline
*/

TabularTables.Samples = new Tabular.Table({
  name: "SampleList",
  collection: Samples,
  columns: [
              {data: "sampleID", title: "SampleID"},
              {data: "locationID", title: "LocationID"},
              {data: "dateID", title: "DateID"},
              {data: "BOD",title: "BOD"},
              {data: "TSS", title: "TSS"}
           ]
});