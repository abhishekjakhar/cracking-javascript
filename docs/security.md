---
id: security
title: Security
sidebar_label: Security
---

## Auth.log

Pull IP from Auth.log and check in Maxmind Geo IP service to see from where the attack is coming in the world

## Security checklist

- SSH(Secure Socket Shell) - Instead of using a username and password, we use SSH. Because, the problem with username and password is we humans tend to re-use same password over and over again or we will use variations of password.
- Firewalls
- Updates - Keeping your software up to date is very important. There are newly discovered vulnerabilities called zero-days. So, "zero-days" refers to the fact that the developers have "zero days" to fix the problem that has just been exposed, and perhaps already exploited by hackers.
- Two factor authentication - It adds additional layer of security to your accounts. It requires additional login credentials beyond just the username and password.
- VPN(Virtual Private Network) - A wall between the internet and intranet.

## unattended-upgrades

We need to prevent zero-days, so we can install unattended-upgrades, what it does is it automatically upgrades your software for security or minor fixes.

```
sudo apt install unattended-upgrades
```

Always keep your software up to date if you can. But, don't necessarily jump on the latest version of something. But, stay on the latest patches and fixes.

## Ethics

If you see that there is some security vulnerability in your company, you should say something.

## Firewall

A network security device that monitors incoming and outgoing network traffic and decides whether to allow of block specific traffic based on defined set of security rules.

## Upgrade Node

- Update the node to latest LTS version
- Update the outdated node packages

## HTTP

- hypertext transfer protocal
- it runs over TCP
- it defines how the code moves from server to client

## HTTP Status Code

- 1xx Information
- 2xx Success
- 3xx Redirect
- 4xx Client error
- 5xx Server error

## HTTP Status Code in details

## Types of hackers

- Black Hat: Causes damage, hold data for ransom. Driven by personal gain, or desire to do as much damage as possible.
- Grey Hat: Break into systems, but usually causes no damage. Mostly driven by curosity. Sometimes report vulnerabilities they find.
- White Hat: Break into system with permission, responsibly disclose anything they find. Make money from "bug bounties" and consulting as penetration tester.

## Cross-Site Scripting (XSS)

This category of attack is called an injection attack where we're basically like, putting content in a place that is designed for text, we can trick the system into treating it as code and executing it.

We're allowing our content to become code and to be executed. Allow attackers to read data, or perform operation on user's behalf.

```
<h1>Welcome, <%- name %></h1>

name = "Abhishek";
name = "Abhishek<script>terrible()</script>"
```

More than 30% of sites are vulnerable to this kind of thing in one way or another.

- Stored XSS - COde that executes attacker's script is persisted
- Reflected XSS - Transient response from server causes script to execute (i.e, a validation error)
- DOM Based XSS - No server involvement is required (i.e pass code in via query params)
- Blind XSS - Exploits vulnerability in another app (log reader), that attacker can't see or access under normal means

XSS Danger Zones

- User-generated rich text (i.e WYSIWYG)
- Embedded content
- Anywhere users have control over URL
- Anywhere user input is reflected back (i.e coudn't find)
- Query Parameters rendered into DOM
- element.innerHTML = ?

Defending against XSS

## Sanitizing User Data

1. We should never trust raw user data and we should not put raw user data in these places

   - Directly in a script
   - In an HTML comment
   - In an attribute name
   - In a tag name
   - Directly in a style block

2. We should sanitize the raw user data using a library called DOMPurify, we need to keep user values as values and not as code.

## What is dangerouslySetInnerHTML and why is it dangerous?

dangerouslySetInnerHTML is a React's replacement for using innerHTML in the browser DOM.

```js
function myComponent() {
  return (
    <div dangerouslySetInnerHTML={{ _html: "First &middot; Second" }}></div>
  );
}
```

It is dangerous because setting HTML from code can easily expose your users to XSS attacks. We need to sanitize the data before using it in dangerouslySetInnerHTML.

```js
function myComponent() {
  return (
    <div dangerouslySetInnerHTML={{ _html: DOMPurify.sanitize(value) }}></div>
  );
}
```

## CSP (Content Security Policy)

## Malicious Attachments

- The more restrictive you are on file upload types and ability to access those types, the less of a XSS vector your app becomes.
- Use image minify tools because they remove the non-visible data
- Before allowing attachment types, research capabilities thoroughly
- PDF can execute JavaScript's
