# Resolving Merge Conflicts

When multiple developers are working on a project, it is very common for team members to edit the same file or the same lines of code, but their changes may not match the changes of their other team members. The result is what is known in version control as a **merge conflict**.

Merge conflicts are a normal part of working with version control systems and working on dev teams. There are several ways to 1)avoid and 2)resolve merge conflicts.

## Best Practices

### Remember that any time you are making a contribution to a project, you should be following this work flow:

1. Create an issue for the updates you are making
2. From the `master` or `main` branch, use the command `git checkout -b name-of-branch` to create a new branch for your updates and check out to that branch (this ensures that the code you add to a project will not directly affect the `master` or `main` branch
3. Make changes to the files you want to modify.
4. Save your changes.
5. Run the command `git add name-of-file` or `git add .` to add your changes to staging so that you can commit them to version control
6. Run the command `git commit -m "make a descriptive commit message to let others know what changes you made in your commit"`
7. Run the command `git push -u origin name-of-branch` if it is your first time pushing to the branch you are working on. This will push the changes to your local git repository to its associated GitHub repository, and create a remote version of the local branch you are working on, where your changes will be stored.
8. Run the command `git push origin name-of-branch` if you have already set up the upstream relationship between your local branch and the remote branch on GitHub
9. Create a pull request to the master or main branch, comparing the `master` or `main` branch with the changes you have made in the branch you were working on.
10. Your branch and the changes within your pull request will be reviewed by your peers and by an instructor (or instructors). If the changes are accepted, your pull request will be merged to the `master` or `main` branch.
11. Run the command `git checkout master` or `git checkout main` so that you can update your local version of the `master` or `main` branch
12. Run the command `git fetch` to ensure changes that your local project is aware of remote changes to the project
13. Run the command `git pull` to retrieve the remote changes to the `master` or `main` branch and update your local `master` or `main` branch
14. Alert your team mates that updates have been merged to the `master` or `main` branch so that they can also pull those changes to their own local `master` or `main` branch

### Once a pull request has been merged to the `master` or `main` branch remotely and locally:

1. Run the command `git checkout name-of-branch` to go back into the feature branch you would like to update
2. From your feature branch, run the command `git pull origin master` or `git pull origin main` to retrieve the changes that were merged to `master` or `main` into your feature branch
3. If you and a teammate have made changes to the same file(s) or same line(s) of code, this will result in a merge conflict.
4. Check to see which file(s) contain merge conflicts.
5. Open each of those files in your text editor. You will notice that merge conflicts are highlighted to indicate which file(s) and which line(s) of code are in conflict with each other.
6. Communicate with your teammates to decide which version of the file(s) and line(s) of code you would like to select. Sometimes this means you will delete changes you made, sometimes you may delete changes your teammate made, or sometimes you will use both changes or pieces of both changes.
7. Ensure that your code is free of syntax errors that may result from selecting or combining and updating your code.
8. Run the command `git add name-of-file` or `git add .` to prepare your merge conflict resolution to staging
9. Run the command `git commit -m "write a descriptive message of the merge conflict that you resolved"`
10. If you are still working on changes to your feature branch, you do not need to push to your remote branch just yet.
11. Once you are ready to push changes up to your feature branch, follow the normal work flow for adding, commiting, and pushing your changes. Create a pull request to the master branch.
12. If you notice that, when you create your pull request to the master branch, you receive a message indicating that there are merge conflicts between your branch and the base branch, address them by following steps 4-9.
