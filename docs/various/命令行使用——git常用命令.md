
## git常用命令

### 查看本地所有分枝

```
git branch 
```

### 查看远程所有分支

```
git branch -a  
```

### 2. 拉取本地没有的远程分支
<!--本地没有的远程分支并切换到此分支上-->
- 拉取远程分支：
```
git fetch origin 分支名称
```
-  新建并切换到
```
git checkout -b 分支名称 origin/分支名称
```
-  只执行切换分支：
```
git checkout 分支名称 
```


### 3. 提交修改并推送到远程分支
```
git add 文件名 或 git add .
```
- 从暂存区添加到缓存区
```
git commit -m “自填提交内容信息”
```
- 
- —从暂存区添加到本地仓库
```
 git push  
// 推送主分支所有内容
git push origin master
// 推送其他分支(dev)
git push origin dev
```
 
### 删除本地分支
```
git branch -D <BranchName>
```
### 删除本地全部分支
```
// 强制删除所有分支（慎用，有些本地修改你可能没有提交）
git branch |xargs git branch -D

// 删除本地所有与远程仓库同步分支（本地修改过未提交的不会删除）
git branch |xargs git branch -dz
```
### 获取某次提交的代码
```
git cherry-pick 分支id 
```

### git stash 的使用

1. 保存stash title为saveName
```
git stash save 'saveName'
```
2. 查看stash 列表
```
git stash list
```
3.  找回stash且不删除stash list 中的内容
```
git stash apply stash@{0} 
```

4.  删除指定stash中的内容
```
git stash drop stash@{0}
```


### 打tag标签
```
npm run pub
 ```
 