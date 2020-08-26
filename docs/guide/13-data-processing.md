# Data processing

## Query Builder

Query builder will help to check you dataset for possible inconsistences. You can add a new query by clicking `ADD QUERY` button or click `BUILDER` tab.

![An image](/images/s13_qb.jpg)

### Build a new query

Using query builder can design a query in any complexity. For this:
A) Select a dataset;
B) Select `Match Type`;
C) select a question;
D) Click `Add Rule` for that question;
E) Give a name for this query;
Then you can save this filter.

![An image](/images/s13_qb_add.jpg)

::: details Example
Let say you are providing phone survey and you have the Question 

**F. Do you agree to participate in the survey?** with answer choices:
* *Yes*
* *No-I do not want to participate*
* *Phone number is not available*
* *Did not respond/Respondent wants to be called later*

You would like to know how many submissions does not have a survey data, e.g. the answer to question **F. Do you agree to participate in the survey?** was selected other than *Yes*. In this case `Match Type` will be **Any** and you add three rules for all three answer choices other than *Yes*.

See: 

![An image](/images/s13_qb_build.jpg)
:::

### Edit existing queries

All you queries will be listed under `EXISTING QUERIES` tab. Under **Actions** there are four buttons. 

![An image](/images/s13_qb_queries.jpg)

To change the existing query click on button ![An image](/images/btn_pencil.png) `Edit query`

### Download query results

You can download results of your queries by clicking ![An image](/images/btn_download.png) `Download results` button under **Actions** column. This will download archived version of query result for all datasets you activated in [Monitoring preferences](/guide/07-preferences.md#types-of-dataset) page.

### Exclude query results

Sometimes you might want to exclude results of query from your datasets, so you can track the process with submission those have a real data. As in above example if you want to exclude from [Dashboard](/guide/09-dashboard.md) statistics and from your datasets all submission with not agreed respondents click ![An image](/images/btn_exclude.png) `Exclude results from dataset` button. 

::: tip
This will not delete any of your submissions, moreover you can edit or delete queries any time.
:::