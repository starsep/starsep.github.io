---
---

# Firefox

### Disable Pocket
1. Go to about:config
2. Set `extensions.pocket.enabled` to `false`

# Git

### Ignore local changes to checked in files
`git update-index --assume-unchanged <file>`

### Create orphan branch
`git checkout --orphan`

# Gradle plugins
- https://github.com/ben-manes/gradle-versions-plugin `./gradlew dependencyUpdates`

# Linux/Unix

### Mount Windows partition

If you get this error:
```
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Falling back to read-only mount because the NTFS partition is in an
unsafe state. Please resume and shutdown Windows fully (no hibernation
or fast restarting.)
Could not mount read-write, trying read-only
```

```
sudo ntfsfix /dev/sdXY
sudo mount -o rw /dev/sdXY
```

# Hugo

### Docs offline

```
cd hugo/docs
hugo server
```
