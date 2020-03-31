console.log("This is my complex app");

// git add adds a file to the git repository
// git commit -m "Blah Blah Blah"
// have to add the -m, its a message, a must have.
// its a message to us to help us remember what we're saving.
// have it in present tense.

console.log("Another line!");

// ==================================Git Status:========================================

// git status gives us what is going on at that time.

// ==================================Git Init:==========================================

// git init lets us start using git to being with.

// ==================================Git Log:===========================================

// git log lets us see everything that we have committed and when. when we press enter, we actually move down. we're in a different terminal now. to exit, press q.

// ==================================Git Checkout:======================================

// git checkout. we copy the unique id that we see when we are in the git log, and we type git checkout, then that id.
// this takes us back in time to view code that we once had but have since changed.
// type git checkout master to return.
// if you want to go back to a certain point in time and delete everything else, type git revert --no-commit (hash of commit).. HEAD

// then do git status. you'll see that a lot of files need to be committed because they've obviously changed due to being reverted back to how they were.

// so do git commit -m "Blah Blah Blah" then hit enter and it will all save.
// still have the old commit though, so can still revert back to the file we had.

// =============================Adding multiple files of the same type:====================

// if we want to add multiple files of the same type, such as html, we would use:
// git add *.html

// ============================Add all files:========================================

// if we want to add all files, we use git add -A
// also adds all folders in the directory and any hidden files.

// ============================Remove a file:======================================

// to remove a file, do git reset HEAD <file>

// ============================Ignore a file:====================================

// to ignore a file, make a .gitignore file
// then, type the names of any files you want to ignore in there and git will ignore them.
// for example:
// text.html
// just there, at the top.

// ============================Branches:=========================================

// with branches, we can work on the same project but take it different ways. so we can try out things for one branch and take them a completely different way on another branch.

// ============================Listing branches:=================================

// List:
// git branch lets us see all the branches that are available. the * shows which one we're in now.

// ===================================New Branch:=====================================

// add a new branch using git checkout -b <branchname> this not only creates the new branch, but also auto switches us to that one.

// ======================================Switch Branches:====================================
// switch to a branch using git checkout <branchname>

// remember, to start making variations of the timeline, you have to commit the file on the different branches

// ======================================Merge Branches:========================

// to merge the two branches, we need to type git merge <branchname>
// this will let both branches know about the files and stuff on the other branch.

// ======================================Delete Branches:=========================

// to delete a branch, git branch -d <branchname>