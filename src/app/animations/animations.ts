import { trigger, style, animate, transition, group, query, animation, useAnimation, state } from '@angular/animations';

const slideAnimation = animation([
  group([
    query('.heading__grid-title', [
      style({
        opacity: 0,
        transform: '{{ translateTitle}}'
      }),
      animate('1000ms  ease-in', style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ], { optional: true }),
    query('.heading__grid-underline', [
      style({
        opacity: 0,
        transform: '{{ translateUnderline}}'
      }),
      animate('1000ms 200ms ease-in', style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ], { optional: true }),
    query(':self', [
      animate('100ms ease-in', style({
        opacity: 1,
      }))
    ], { optional: true })

  ])
], {
  params: {
    translateTitle: 'translateX(400%)',
    translateUnderline: 'translateX(400%)'
  }
  }
);

export function slideHeadingTrigger(params) {

  return trigger('slideHeadingState', [
    state('out-viewport', style({ opacity: 0 })),
    transition('* => in-viewport', [
      useAnimation(slideAnimation, { params: params })
    ])
  ]);
}
