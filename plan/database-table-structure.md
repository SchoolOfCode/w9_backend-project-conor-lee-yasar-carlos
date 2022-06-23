# Database Table Structure

Table structures we will use to build the database

## TasksUser table

| TaskId | UserId | Rating | IsWeekend | Completed | Comments |
| ------ | ------ | ------ | --------- | --------- | -------- |
| int    | int    | int    | boolean   | boolean   | string   |

## Users table

| Id  | User   |
| --- | ------ |
| int | string |

## Resources table

| id  | resource | taskId | url    |
| --- | -------- | ------ | ------ |
| int | string   | int    | string |

## Tasks table

| Id  | Task   | Week | Day |
| --- | ------ | ---- | --- |
| int | string | int  | int |
