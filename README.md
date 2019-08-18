# ng-in-ten
Angular Bootup repo

## create an angular component
ng g[enerate] c[omponent] Sample

## create a service
ng g s[service] Sample

## Data binding
[prop] = "expr"; // bind to DOM property
[attr.colspan] = "value"; // if you are trying to set a DOM attribute without corresponding DOM Property
(event) = "handle()"

# Styles
styleUrls: ['filepath1'],
styles: [ `inline style1 `]

Only the last style direction is applied. Here styles from the filepath would be ignored. styleUrls seems to take precedence on inline variants.

#Directives
- structural directives are prefixed with *
- hidden vs *ngIf: hidden elements are invisible but exist in DOM