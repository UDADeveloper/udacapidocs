# Dashboard

Dashboard will help you to monitor your data collection process.

## Monitoring Blocks
In this section there are three default blocks: `Completed submissions`; `Last submission` and barchart of `Latest submissions`. More blocks can be addedd using block settings box.

### Default blocks

**Completed submissions** and  **Last submission** are statisistics blocks
![An image](./img/noimage.png) -Completed submissions  ![An image](./img/noimage.png)-Last submission

**Latest submissions** block is a bar chart indicating trends for last days' data collection statistics. While activating this block you need to indicate the number - how many days you would like to include into this bar chart

![An image](./img/s07_1LS.png)

Click settings button to opan settings box. ![An image](./img/noimage.png)

![An image](./img/noimage.png)

### Additional blocks
#### Progress pie

To add a progress pie block you need to select a table:

![An image](./img/s07_1PP.png)

Then, you need to indicate your target - total number of submissions you planned to collect from the field. You find target field in the settings block. The default number is 100, change it accordingly.

![An image](./img/noimage.png) - image target

![An image](./img/noimage.png) - block image


#### Daily progress

The daily progress block will inform about current progress and previous days' statistics in terms of data collection. In this block you can also see the start date of data collection progress and remaining surveys.

![An image](./img/s07_1PP.png)

Here also you need to indicate your target - total number of submissions you planned to collect from the field. Default number is 100, you change it accordingly.

![An image](./img/noimage.png) - block image


::: tip Note
Dashboard presents you your survey data in near to real time. If you have any queries marked to be exclude from dataset in [Query Builder](./60-data-processing.html#query-builder), than the results of that query will not be included into the data of these blocks.
:::

#### Progress map

If you collect locational data in your survey form, selecting `Progress map` choice let you monitor data collection progress on the map in this Dashboard. This will also activate [Mapboard section](./45-mapboard.md). 

![An image](./img/s09_map.jpg)

To activate this block you should select `Longitude` and `Latitude` variables from your survey form.

![An image](./img/s07_1PM.png)

## Data Monitoring

This section contains Monitoring tables and Descriptive statistics sections.

### Monitoring tables

![An image](./img/s10_mt_mt.jpg)

### Descriptive statistics

![An image](./img/s10_mt_ds.jpg)


## Download Datasets

Types of the datasets included into this section also activated via [Monitoring preferences](./21-preferences.html#monitoring-blocks) page. 

![An image](./img/s09_datasets.png)

To be able to download a dataset of you choice first you should generate the latest version of the data by clicking ![An image](./img/s09_gen.png)

![An image](./img/s09_dataset_gen.png)

When dataset is generated you can download it

![An image](./img/s09_dataset_dwn.png)