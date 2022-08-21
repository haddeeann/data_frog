---
title: Subclassing
layout: "article_type_two.njk"
---
[Go home](/index.html)

[Custom Array Containers](https://numpy.org/doc/stable/user/basics.subclassing.html)

## Subclassing ndarray

Subclassing can be done in three basic ways:

1. Explicit constructor call, `MySubClass(params)`
2. View casting, casting an existing ndarray as a given subclass
3. New from template, creating a new instance from a template instance.

## When to use subclassing

Besides the addtional complexities of subclassing a NumPy array, subclasses can run into unexpected behavior because of some functions may convert to the subclass to a baseclass and "forget" any additional information associated with the subclass.

This can result in surprising behavior if you use NumPy methods or functions you have not explicitly tested. 

On the other hand, compared to other interoperability approaches, subclassing can be a useful because many things will just 'work'.

This means that subclassing can be a convenient approach. 

NumPy now provides additional interoperability protocols described in "Interoperability with NumPy".

For many use cases these interoperability protocols may now be a better fit or supplement the use of subclassing.

Subclassing can be a good fit if:

- you aren't worried about maintainability or users other than yourself.
- you don't think it's problematic if the subclass information is ignored or lost silently.

## View Casting
View casting is the stand ndarray mechanism by which you take an ndarray of any subclass and return a view of the array as another (specified) subclass.

A new instance of an ndarray subclass can also come about by a very similar mechanism to View Casting, when NumPy finds it needs to create a new instance from a template instance. The most obvious place this has to happen is when you are taking slices of subclassed arrays.

The slice is a view onto the original c_arr data. So when we take a view from the ndarray we return a new ndarray of the same class. One that points to the data in the original.

There are other points in the use of ndarrays where we need such views, such as copying arrays, creating ufunc output arrays and reducing methods.

## The Role of __array_finalize__

The __array_finalize__ is the mechanism that NumPy provides to allow subclasses to handle the various ways that the new instances get created.

So by defining a specific __array_wrap__ method for our subclass, we can tweak the output from unfuncs. The __array_wrap__ method requires self, then an argument which is the result of the ufunc and an optional parameter context.

The default implementation does nothing but pass through the array.