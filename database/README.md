# Database Information

If you would like to self-host Godder.xyz, you will need a Supabase project. Below is the information for the project.

## Authentication

Enable OAuth2 authentication for GitHub.

## Database

In the [blogs.csv](database/blogs.csv) and the [comments.csv](database/comments.csv) files, you will find the table information and its columns to create your own database with the tables. Unfortunately, a database query to create all tables cannot be provided for reasons.

###### Yeah, reasons... 😔

## Policies (Row Level Security)

To prevent unauthorized access to the database, you will need to create policies. Ensure you replace `YOUR EMAIL HERE` with the email address provided in your environment variables.

![](https://i.imgur.com/Zk5k3GJ.png)
