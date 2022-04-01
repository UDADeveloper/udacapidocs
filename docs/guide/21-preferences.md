# Monitoring Preferences

For each published form you need to assign you preferences to start Monitoring of data collection. Click the `Monitoring preferences` button to see all possible settings.

<BestButton>Push Me</BestButton>

![An image](./img/s7_1-MPreferences.png)

## Monitoring blocks

Monitoring blocks is section with information about the submissions from your survey form. If you collect GPS or calculate latitude and longitude data you monitor the `Progress on the map`. There are also `Progress Pie`, `Daily Progress` and `Latest Submissions` blocks available. You can activate them. Only selected block will be included into your Dashboard

![An image](./img/s07_1DB_empty.png)

### Progress map

If you collect locational data in your survey form, activating `Progress map` choice let you monitor data collection progress on the map via [Dashboard](/guide/30-dashboard.md) and also activate [Mapboard section](/guide/45-mapboard.md). To activate this choice you should select `Longitude` and `Latitude` variables from your survey form.

![An image](./img/s07_1PM.png)

### Progress pie

Progress pie block does not require any specific variable to be selected you need select table:

![An image](./img/s07_1PP.png)

also you need to indicate your target - total number of submissions you planned to collect from the field. Default number is 100, you change it accordingly.

![An image](./img/s07_1PP_target.png)

### Daily progress

Daily progress will inform about current progress and previous days' statistics in terms of data collection. In this block you can also see the start date of data collection progress and remaining surveys.

![An image](./img/s07_1PP.png)

Here also you need to indicate your target - total number of submissions you planned to collect from the field. Default number is 100, you change it accordingly.

![An image](./img/s07_1DP_target.png)

### Latest submissions

Latest submissions block is a bar chart indicating trends for last days' data collection statistics. While activating this block you need to indicate the number - how many days you would like to include into this bar chart

![An image](./img/s07_1LS.png)

## Types of Dataset
 
UDACAPI allows download your dataset in any of the following formats. Activate any of them to be able to download the dataset in that format in Dashboard. 

![An image](./img/s07_2_Datasets.png)

## Monitoring Tools

With the help of Monitoring tools you can observe responses to any question while collecting data from the field. For numeric answers that could be a `Descriptive Statistics` including *maximum*, *minimum*, and *average* values also *mean*, *median*, *standard deviation*, etc. For categorical variables it could be a `Pie Chart` and `Cross table` as known as Pivot table. To add the monitoring tool click the `New item` button.

![An image](./img/s07_3_MT.png)

### Descriptive Statistics

To add a new descriptive statistics tool you need to Select table and one variable from that table. Then give a title for this tool and click `Save`

![An image](./img/s07_3_MT_DS.png)

### Pie Chart

`Pie Chart` too also requires a *table* to be selected and a variable from that table. Then give a title for this tool and click `Save`

![An image](./img/s07_3_MT_PCh.png)

### Cross table

For a `Cross table` tool after selecting a table you also need to choose a variable for *Column*, for *Row* and one for *Value* (as a Value you can select a uniqueID column). Then type a title for this tool and click `Save`

![An image](./img/s07_3_MT_CT.png)