export NVM_DIR="$HOME/.nvm"
nvm use 20
npm run dev


mv public/assets/realrobot_videos/tube_fail.mp4 public/assets/realrobot_videos/tube_fail_orig.mp4
ffmpeg \
-i public/assets/realrobot_videos/tube_fail_orig.mp4 \
-c:v libx264 \
-pix_fmt yuv420p \
-movflags +faststart \
public/assets/realrobot_videos/tube_fail.mp4
rm -rf public/assets/realrobot_videos/tube_fail_orig.mp4