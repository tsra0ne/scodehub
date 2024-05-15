---
title: Swift Basics
head:
  - - meta
    - name: description
      content: swift language basics
  - - meta
    - name: keywords
      content: swift
layout: doc
---

# Swift Basics

[[toc]]

## Constants and Variables

Use let to declare constants and var for variables.

```swift
let siteName = "https://swiftcodehub.in"
var numberOfSiteAttempts = 10
```

> [!TIP]
> If a stored value in your code won’t change, always declare it as a constant with the let
keyword. Use variables only for storing values that change.

You can assign a initial value later in the program but you it's gaurenteed to have a value befoew you read it.

```swift
let siteName: String
var numberOfSiteAttempts: Int

siteName = "https://swiftcodehub.in"
numberOfSiteAttempts = 10

// Error
siteName = "example.com"
```

You cannot assign `"example.com"` to `siteName` because it's a constant.

You can also declare multiple variables in the same line.

```swift
var apples = 2, bananas = 5, carrots = 8
```

## Type Annotation

You can provide type annotation to constants and variable, it tells about the kind of values it can accept.

```swift
var deviceName: String
deviceName = "Apple"
```

Here, `deviceName` variable can only accepts string values. eg: `"Apple"`, `"Android"`.

we can declare multiple variables of same type in same line, as shown in below code.

```swift
var apples, bananas, carrots: String
```

> [!NOTE]
> Swift compiler can infer the variable and constant types if we provide a initial value when creating them.