# data-analyst-vivek
# Exploratory Analysis of Vancouver Rental Standards Current Issues

## Project Description

## Data Analytical Platform
![14](https://github.com/user-attachments/assets/b679f1b0-25de-46db-a0cd-6fcd845123fe)

This project involves an exploratory analysis of the Vancouver Rental Standards Current Issues dataset. The primary goal is to identify and understand patterns and trends in unresolved by-law issues across different geographic areas within Vancouver. By leveraging data analytics and cloud computing tools, this project aims to provide actionable insights that can help improve rental standards and address compliance challenges in the city.

## Objective

The main objective of this project is to conduct a thorough analysis of the unresolved by-law issues reported in Vancouver's rental properties. This involves cleaning, transforming, and analyzing the dataset to uncover insights related to the geographic distribution of these issues.

## Dataset

The dataset used in this project includes the following fields:

- **Business Operator**: The name or identifier of the business or individual operating the rental property.
- **Detail URL**: A web link to a detailed page containing more information about the specific property or issue.
- **Street Number**: The number assigned to a building or property on a street.
- **Street**: The name of the street where the property is located.
- **Total Outstanding**: The total number of unresolved by-law issues or complaints associated with the property.
- **Total Units**: The total number of rental units within the property.
- **Geom**: Geometric data representing the shape or boundary of the property.
- **Geo Local Area**: The geographic area or neighbourhood where the property is situated.
- **Geo Point 2d**: A specific geographic coordinate (latitude and longitude) representing the exact location of the property.

## Methodology

### Data Collection

The dataset was sourced from Vancouver's open data portal and ingested into an Amazon S3 bucket for further processing.

### Data Profiling and Cleaning

Data profiling was performed using AWS Glue DataBrew to understand the structure, content, and quality of the data. Issues such as missing values, outliers, and inconsistencies were identified and addressed. The cleaned data was stored in a separate S3 bucket.

### Data Transformation

Data transformation involved converting data types, standardizing formats, and deriving new features. AWS Glue was used to perform these transformations and create a structured dataset suitable for analysis.

### Data Analysis

The cleaned and transformed dataset was analyzed to answer the following key question:

- **What is the total count of unresolved by-law issues based on the Geo Local Area?**
- **What is the average number of unresolved by-law issues based on the Geo Local Area?**

### Data Pipeline Design

The data pipeline was designed using AWS Glue's Visual ETL tool to automate the process of data extraction, transformation, and loading (ETL). The pipeline included steps for data ingestion, cleaning, transformation, and storage.
## For Total Count
![11](https://github.com/user-attachments/assets/90ed13a4-fae5-4ae8-a6cc-442e3a699b4a)

## Average number of unresolved by-law issues
![15](https://github.com/user-attachments/assets/c76cf1dd-3bb6-4186-94a5-91a272eb78eb)

## Tools and Technologies

- **Amazon S3**: Storage service for raw, transformed, and curated data.
- **AWS Glue DataBrew**: Data preparation tool for profiling and cleaning data.
- **AWS Glue**: ETL service for data transformation and loading.

## Results and Insights

### Total Count of Unresolved By-Law Issues
The analysis revealed the distribution of unresolved by-law issues across different geographic areas in Vancouver. The Geo Local Area with the highest number of unresolved issues was identified, highlighting areas that may require additional resources and attention.
![1](https://github.com/user-attachments/assets/2b130624-3f25-4762-bdc2-426452817e94)

### Average Number of Unresolved By-Law Issues

The average number of unresolved by-law issues was calculated for each Geo Local Area, providing insights into the relative severity of compliance challenges in different neighbourhoods.
![2](https://github.com/user-attachments/assets/b6852e86-112d-4fb0-92f2-71d97ae19770)

![16](https://github.com/user-attachments/assets/e0f2495a-3eb8-4eba-9f1b-7cf2a0e28b92)

## Conclusion

This project successfully demonstrated the use of cloud computing and data analytics tools to perform an exploratory analysis of the Vancouver Rental Standards Current Issues dataset. The insights gained from this analysis can help inform policy decisions and resource allocation to address rental compliance issues in Vancouver.

## Future Work

Future work could involve extending the analysis to include additional datasets, such as demographic information or historical data on by-law compliance. Further, predictive analytics could be employed to forecast trends and identify potential areas of concern before they become significant issues.

# Data Crawler for Vancouver Rental Standards Current Issue. Phase 2

## Project Description
This project involves creating a data crawler to analyze the Vancouver Rental Standards Current Issues dataset. The primary goal is to identify and understand patterns and trends in unresolved by-law issues across different geographic areas within Vancouver. By leveraging data analytics and cloud computing tools, this project aims to provide actionable insights that can help improve rental standards and address compliance challenges in the city.

## Objective
The main objective of this project is to conduct a thorough analysis of the unresolved by-law issues reported in Vancouver's rental properties. This involves cleaning, transforming, and analyzing the dataset to uncover insights related to the geographic distribution of these issues.

## Dataset
The dataset used in this project includes the following fields:
- **Business Operator**: The name or identifier of the business or individual operating the rental property.
- **Detail URL**: A web link to a detailed page containing more information about the specific property or issue.
- **Street Number**: The number assigned to a building or property on a street.
- **Street**: The name of the street where the property is located.
- **Total Outstanding**: The total number of unresolved by-law issues or complaints associated with the property.
- **Total Units**: The total number of rental units within the property.
- **Geom**: Geometric data representing the shape or boundary of the property.
- **Geo Local Area**: The geographic area or neighbourhood where the property is situated.
- **Geo Point 2d**: A specific geographic coordinate (latitude and longitude) representing the exact location of the property.
## Methodology
### Data Collection
The dataset was sourced from Vancouver's open data portal and ingested into an Amazon S3 bucket for further processing.

### Data Profiling and Cleaning
Data profiling was performed using AWS Glue DataBrew to understand the structure, content, and quality of the data. Issues such as missing values, outliers, and inconsistencies were identified and addressed. The cleaned data was stored in a separate S3 bucket.

### Data Transformation
Data transformation involved converting data types, standardizing formats, and deriving new features. AWS Glue was used to perform these transformations and create a structured dataset suitable for analysis.

### Data Enriching
AWS Glue was used for data enrichment, involving data transformation, cleansing, and augmenting raw data with additional context. DynamoDB was utilized for its scalability and NoSQL data service capabilities. A data crawler was implemented to perform large-scale data enrichment automatically.

### Data Protection
Data protection involved securing data through encryption, access control, and backup strategies using AWS Key Management Service (KMS) and IAM for user permissions.

### Data Observability
Data observability was performed using Amazon CloudWatch, enabling real-time monitoring and visualization of key metrics related to the data pipeline's performance and health.

## Tools and Technologies
- **Amazon S3**: Storage service for raw, transformed, and curated data.
- **AWS Glue DataBrew**: Data preparation tool for profiling and cleaning data.
- **AWS Glue**: ETL service for data transformation and loading.
- **DynamoDB**: NoSQL data service for scalable data management.
- **Amazon Athena**: Query service for running SQL queries on data stored in S3.
- **Amazon CloudWatch**: Monitoring and observability service.
- **AWS Key Management Service (KMS)**: Encryption and key management service.

## Results and Insights
### Total Count of Unresolved By-Law Issues
The analysis revealed the distribution of unresolved by-law issues across different geographic areas in Vancouver. The Geo Local Area with the highest number of unresolved issues was identified, highlighting areas that may require additional resources and attention.

### Average Number of Unresolved By-Law Issues
The average number of unresolved by-law issues was calculated for each Geo Local Area, providing insights into the relative severity of compliance challenges in different neighbourhoods.

## Conclusion
This project successfully demonstrated the use of cloud computing and data analytics tools to perform an exploratory analysis of the Vancouver Rental Standards Current Issues dataset. The insights gained from this analysis can help inform policy decisions and resource allocation to address rental compliance issues in Vancouver.

## Future Work
Future work could involve extending the analysis to include additional datasets, such as demographic information or historical data on by-law compliance. Further, predictive analytics could be employed to forecast trends and identify potential areas of concern before they become significant issues.

## Acknowledgments
This project was completed as part of a cloud computing class assignment. Special thanks to Professor Mahmood Mortazavi Dehkordi for the guidance and resources provided.

## Contact
For any questions or further information, please contact Jaya Vivek Reddy at [jayavivek123@gmail.com](mailto:jayavivek123@gmail.com).

