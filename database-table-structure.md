# Database Table Structure

The tables we will use to build the database

## TasksUser table

| TaskId | UserId | Rating | IsWeekend | Completed |
| ------ | ------ | ------ | --------- | --------- |
| int    | int    | int    | boolean   | boolean   |

## Comments table

| TasksId | UserId | Comment |
| ------- | ------ | ------- |
| int     | int    | string  |

## Users table

| Id  | User   |
| --- | ------ |
| int | string |

## Resources table

| id  | resource | TaskId |
| --- | -------- | ------ |
| int | string   | int    |

## Tasks table

| Id  | Task | Week | Day    |
| --- | ---- | ---- | ------ |
| int | int  | int  | string |
