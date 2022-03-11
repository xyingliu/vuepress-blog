---
title: 配置ssh
---

1. 输入命令：cd ~/.ssh 然后输入: $ ls 会看到以下内容：
   （---）

2. 如果没有.ssh 文件，这个时候你就要输入命令：

```
ssh-keygen -t rsa -C "email@email.com"
```

来创建.ssh， 3. 然后你就会看到：

```
Creates a new ssh key using the provided email # Generating public/private rsa key pair.
Enter file in which to save the key (/home/you/.ssh/id_rsa):
```

直接一路 enter 就可以
Enter same passphrase again: [Type passphrase again]会所提示你输入自己密码输不输都可以

4. 完了之后会出现：

```
Your public key has been saved in /home/you/.ssh/id_rsa.pub.
The key fingerprint is: # 01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db your_email@youremail.com
```

这时候就完成了
添加公钥到你的 get

- 1. 查看你生成的公钥：$ cat ~/.ssh/id_rsa.pub
- 2. 你就可以看到自己生成的公钥了如图：
     -3. 登陆你的 github 帐户。点击你的头像，然后 Settings -> 左栏点击 SSH and GPG keys -> 点击 New SSH key 新建公钥 title 可以随便输 key 就是你刚刚新建的公钥
- 4. 可以测试下：ssh git@github.com如果输出 Hi xxx! You've successfully authenticated, but GitHub does not # provide shell access. Connection to github.com closed.

https://www.cnblogs.com/rgxx/p/10278375.html
