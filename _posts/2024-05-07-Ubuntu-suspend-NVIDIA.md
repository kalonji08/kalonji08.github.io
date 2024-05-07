---
title: "Solving suspend and resume issues on Ubuntu with NVIDIA graphics"
date: 2024-05-07 18:34:08 +1000
categories: [Linux]
tags: [Ubuntu, NVIDIA, Linux Tips, Tech How-To, Linux]
---


![Frustrated Meme](https://debate.protocommunications.com/wp-content/uploads/2018/03/frustrated-meme.png)

<div align="center">
  <p>Image credit: <a href="https://debate.protocommunications.com/">protocommunications</a></p>
</div>


Many Ubuntu users with NVIDIA graphics cards face challenges with their systems not properly suspending or resuming. This issue can cause various problems, such as system freezes, slow wake-up times, and increased power consumption. In this blog post, I'll describe a common problem involving the NVIDIA suspend service and provide a detailed guide on diagnosing and solving these issues.

**Identifying the Problem**

Users might notice that their Ubuntu system becomes unresponsive or fails to wake up properly after being suspended. The logs may show errors related to NVIDIA services during the suspend or resume processes. To investigate further, pulling detailed system logs is essential. Here’s how you can gather this information:

1. **Open Terminal** by pressing **`Ctrl + Alt + T`**.
2. **View the system logs** to identify any errors related to the suspend/resume processes:

```bash
journalctl -b | grep -i suspend
```

1. This command will filter the logs to show entries related to suspending, which can help pinpoint the source of the issue.

**Disabling the NVIDIA Suspend Service**

If the logs indicate problems with **`nvidia-suspend.service`**, temporarily disabling this service can help determine if it's the source of your issues:

1. **Disable the NVIDIA Suspend Service**:

```bash
sudo systemctl disable nvidia-suspend.service
```
This command stops the service from running and prevents it from starting automatically at boot.

2. **Reboot the system to apply changes**:

```bash
sudo reboot
```

3. **Test the system's suspend and resume functionality** to see if the issue is resolved.

**Additional Troubleshooting Steps**

If disabling the NVIDIA suspend service solves the problem, it suggests a conflict between this service and your system's power management settings. However, if issues persist:

**Enable verbose logging** to get more detailed information about what happens during suspend and resume:

```bash
sudo nano /etc/default/grub
```
Add `log_buf_len=1M nvidia-drm.modeset=1` to `GRUB_CMDLINE_LINUX_DEFAULT`, save the file, and run:

```bash
sudo update-grub
sudo reboot
```

**Monitor the logs again after rebooting to check for new entries**:

```bash
journalctl -b | grep -i nvidia
```


Solving suspend and resume issues on systems with NVIDIA graphics can significantly improve your Ubuntu experience. By methodically testing and disabling certain services, you can identify the source of the problem and work towards a permanent solution. Regularly updating your NVIDIA drivers and checking for system updates are also good practices to prevent similar issues in the future.


Did this solution work for you? Have you encountered other issues with suspend/resume on Ubuntu? Share your experiences and solutions in the comments below to help the community learn and grow together!







