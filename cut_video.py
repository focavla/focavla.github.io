import os
import subprocess
import sys

def trim_last_seconds(video_path, seconds_to_cut):
    output_path = os.path.splitext(video_path)[0] + "_trimmed.mp4"

    duration = float(
        subprocess.check_output([
            "ffprobe",
            "-v", "error",
            "-show_entries", "format=duration",
            "-of", "default=noprint_wrappers=1:nokey=1",
            video_path,
        ]).decode().strip()
    )

    new_duration = duration - seconds_to_cut
    if new_duration <= 0:
        raise ValueError("Số giây cần cắt lớn hơn hoặc bằng độ dài video.")

    subprocess.run([
        "ffmpeg",
        "-y",
        "-i", video_path,
        "-t", str(new_duration),
        "-c", "copy",
        output_path,
    ], check=True)

    print(f"Saved: {output_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python trim_video.py <video.mp4> <seconds_to_cut>")
        sys.exit(1)

    trim_last_seconds(sys.argv[1], float(sys.argv[2]))