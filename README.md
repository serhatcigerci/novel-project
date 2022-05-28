# Run the World

This is an app to read webnovels. It is built in JavaScript. I used Node.js, Express.js, MongoDB and Vue.js.

# How to install?

Fork and clone the repository.

```
$ git clone git@github.com:serhatcigerci/novelschnell.git
```

Open the project.

# Install the dependencies

```
$ docker-compose up --build
```

# Run the stack

```
$ docker-compose up
```

# Access the stack from a browser

Open up your /etc/hosts file.

In UNIX and VSCode, it can be opened via the following

```bash
open /etc/hosts
```

In Windows you can use the path `C:\Windows\System32\Drivers\etc\hosts in Windows`

Add the following line to your hosts file

```
127.0.0.1 novelproject.localhost
```