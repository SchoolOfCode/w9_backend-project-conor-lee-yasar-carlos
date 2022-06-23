# Database Table Structure

The tables we will use to build the database

## TasksUser table

| TaskId | UserId | Rating | IsWeekend | Completed |
| ------ | ------ | ------ | --------- | --------- |
| int    | int    | int    | boolean   | boolean   |

## ResourceUser table

| ResourceId | UserId | Rating  |
| ---------- | ------ | ------- |
| int        | int    | boolean |

## Comments table

| TasksId | UserId | Comment |
| ------- | ------ | ------- |
| int     | int    | string  |

## Users table

| Id  | User   |
| --- | ------ |
| int | string |

## Resources table

| id  | resource |
| --- | -------- |
| int | string   |

## Tasks table

| Id  | Task   | Week | Day | resource_id |
| --- | ------ | ---- | --- | ----------- |
| int | string | int  | int | string      |
