# Data processing
 
## Query Builder
 
Query builder will help to check your dataset for possible inconsistencies. You can add a new query by clicking the `ADD QUERY` button or click `BUILDER` tab.
 
![An image](./img/s13_qb.png)
 
### Build a new query
 
Using a query builder can design a query in any complexity. For this:
A) Select a dataset;
B) Select `Match Type`;
C) select a question;
D) Click `Add Rule` for that question;
E) Give a name for this query;
Then you can save this filter.

![An image](./img/s13_qb_add.png)

::: details Example
Let say you are providing phone survey and you have the question:

**F. Do you agree to participate in the survey?** with answer choices:
* *Yes*
* *No-I do not want to participate*
* *Phone number is not available*
* *Did not respond/Respondent wants to be called later*

You would like to know how many submissions does not have a survey data, e.g. the answer to question **F. Do you agree to participate in the survey?** was selected other than *Yes*. In this case in query builder `Match Type` will be **Any** and you add three rules for all three answer choices other than *Yes*.

See: 

![An image](./img/s13_qb_build.png)

This will be read as *"Find submission where answer to question F. Do you agree to participate in the survey? is -'No-I do not want to participate' OR 'Phone number is not available' OR 'Did not respond/Respondent wants to be called later'"*
:::

### Edit existing queries

All your queries will be listed under `EXISTING QUERIES` tab. You can see the details of each query by clicking ![An image](./img/btn_expand.png) `Expand` button.
 
![An image](./img/s13_qb_qdetails.png)
 
Under **Actions** column of the query list there are four buttons.

![An image](./img/s13_qb_queries.png)

To change the existing query click on button ![An image](./img/btn_pencil.png) `Edit query`

### Download query results

You can download results of your queries by clicking ![An image](./img/btn_download.png) `Download results` button under **Actions** column. This will download archived version of query result for all datasets you activated in [Monitoring preferences](./21-preferences.md#types-of-dataset) page.

### Delete query

If you do not need the query you can delete it by clicking ![An image](./img/btn_delete.png) `Delete this query` button under **Actions** column.

### Exclude query results

Sometimes you might want to exclude results of a query from your datasets, so you can track the process with submission that has accurate data. As in above example if you want to exclude all submission with not agreed respondents from [Dashboard](./30-dashboard.md) statistics and from your [datasets](./21-preferences.html#types-of-dataset) click ![An image](./img/btn_exclude.png) `Exclude results from dataset` button. 

::: tip
1. Filter button is not available for queries of roster tables.
2. Excluding results will not delete any of your submissions, moreover you can edit or delete queries any time.
:::