# GIT Branching and Merging Strategy

## Branching Strategy

### Step1. Create new local branch.

To create new local branch, type following command on your terminal

```bash
git checkout -b branch-name 
```

### Step2. Create new or update libraries.

In this stage developer will make changes to `/libs`.
To view how to create new library click [here]().

### Step3. Update documentation app.

In order to keep documentation upto date, it is recommended to update documentation app according to changes maded to libraries.

### Step4. Make commits.

During step 2 ~ 3, developer should make commits with descriptive message.
To make a commit, type following command on your terminal

```bash
git commit -m "commit message”
```

### Step5. Push commits to remote branch.

To upload commits made to local branch to remote branch, type following command on your terminal

```bash
git push origin branch-name
```

## Merging Strategy

### Step1. Create Pull Request on BitBucket.

### Step2. Assignee adds reviewer(s).

### Step3. Review the Pull Request.

### Step4. Merge on approval.


