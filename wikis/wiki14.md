##Database Normalization##

Database normalization is a process used to organize a database into tables and columns.  The idea is that a table should be about a specific topic and that and only supporting topics included.

By limiting a table to one purpose you reduce the number of duplicate data contained within your database. This eliminates some issues stemming from database modifications.

There are three normal forms most databases adhere to using.  As tables satisfy each successive database normalization form, they become less prone to database modification anomalies and more focused toward a sole purpose or topic.

There are three main reasons to normalize a database.  The first is to minimize duplicate data, the second is to minimize or avoid data modification issues, and the third is to simplify queries. 

Duplicated information presents two problems: it increases storage and decrease performance and it also becomes more difficult to maintain data changes.

There are facts we cannot record until we know information for the entire row. In order to create the record, we need provide a primary key.

If we don’t update all rows, then inconsistencies appear.

Deletion of a row causes removal of more than one set of facts.

