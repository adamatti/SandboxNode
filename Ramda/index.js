//REFERENCE http://fr.umio.us/why-ramda/

const R = require("ramda")

var incomplete = R.filter(R.where({complete: false}))
var sortByDate = R.sortBy(R.prop('dueDate'))
var sortByDateDescend = R.compose(R.reverse, sortByDate)
var importantFields = R.project(['title', 'dueDate'])
var groupByUser = R.partition(R.prop('username'))
var activeByUser = R.compose(groupByUser, incomplete)
var topDataAllUsers = R.compose(R.mapObj(R.compose(importantFields, R.take(5), sortByDateDescend)), activeByUser)

var tasks = [
    {
        username: 'Scott',
        title: 'Add `mapObj`',
        dueDate: '2014-06-09',
        complete: false,
        effort: 'low',
        priority: 'medium'
    }, 
    {
        username: 'Michael',
        title: 'Finish algebraic types',
        dueDate: '2014-06-15',
        complete: true,
        effort: 'high',
        priority: 'high'
    }
]

var results = incomplete(tasks)
console.log(results)