// Exercise 1): Find the top navbar, using a query for the HTML element type. The navbar's type is `<nav>`.
document.getElementsByTagName('nav')[0];

// Exercise 2): Find the sidebar on the left by using its id and set it equal to the variable sideBar.
let sidebar=document.getElementById('sidebar-left');

// Exercise 3): Find the 'Pages' and 'Groups' sections of the sidebar by using their class.
sidebar.getElementsByClassName('pages')[0];
sidebar.getElementsByClassName('groups')[0];

// Exercise 4): Set the text of the 'Favorites' `h5` to say "Least Favs".
let favComment = sidebar.getElementsByTagName('h5')[0];
favComment.innerText="Least Favs"

// Exercise 5): Find the first of the ads in the sidebar and hide it.
let statusUpdateForm = document.getElementsByClassName('status-update')[0];
statusUpdateForm.style.visibility = 'hidden';

// Exercise 6): Set the visibility on the ad that you hid in the previous exercise to make it visible again.
statusUpdateForm.style.visibility = 'visible';

// Exercise 7): Use `setAttribute` to change `src` attribute of one of
                //the ads in the sidebar.
document.getElementsByClassName('ads')[0].innerText = "Goat Ads"

// Exercise 8): Find Sam's post and change its text to something incredible.
let commenter = document.getElementsByClassName('media-body')[1];
let comment = commenter.getElementsByTagName('p')[0];
comment.innerText="Helloooo"

// Exercise 9): Find the first post and add the `.post-liked` class to it,
                //and watch it turn blue.
let firstpost1 = document.getElementsByClassName('inline-list post-actions')[0];
let firstpost2 = firstpost1.getElementsByTagName('li')[0];
firstpost2.classList.add('post-liked')

// Exercise 10: Find the second post and add the `.post-shared` class to the
                // `li` containing the text Share to watch it turn red.
let secondpost1 = document.getElementsByClassName('inline-list post-actions')[1];
let secondpost2 = secondpost1.getElementsByTagName('li')[2];
secondpost2.classList.add('post-shared')

// Exercise 11: On the second post, remove the `.post-shared` class
                // from the `li` containing the text Share.

secondpost2.classList.remove('post-shared')
