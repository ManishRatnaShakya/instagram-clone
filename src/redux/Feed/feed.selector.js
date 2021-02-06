import {createSelector} from 'reselect';

const selectFeed = state =>state.feed;

export const selectFeedData = createSelector(
    [selectFeed],
    feed=>feed.feedData
);


export const selectNotifications = createSelector(
    [selectFeed],
    feed=>feed.showNotifications
)