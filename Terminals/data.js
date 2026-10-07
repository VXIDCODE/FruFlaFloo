window.__DATA__ = [
  {
    name: "llama.cpp",
    text: String.raw`
0.00.003.054 I cmn  common_param: common_params_print_info: verbosity = 3 (adjust with the -lv N CLI arg)
0.00.003.734 W srv  llama_server: -----------------
0.00.003.739 W srv  llama_server: CORS is set to allow all origins ('*') and no API key is set
0.00.003.739 W srv  llama_server: this can be a security risk (cross-origin attacks)
0.00.003.740 W srv  llama_server: more info: https://github.com/ggml-org/llama.cpp/pull/25655
0.00.003.740 W srv  llama_server: -----------------
0.00.010.415 W srv  llama_server: sandbox: not supported on this OS
0.00.012.991 I srv  load_model: loading model './models/Qwen2.5-Coder-7B-Instruct-heretic.Q4_K_M.gguf'
0.03.673.355 I srv  load_model: initializing, n_slots = 1, n_ctx_slot = 4096, kv_unified = 'false'
0.03.681.753 I srv  llama_server: model loaded
0.03.681.764 I srv  llama_server: listening on http://127.0.0.1:8081
`
  },
  {
    name: "cargo build",
    text: String.raw`
   Compiling proc-macro2 v1.0.86
   Compiling unicode-ident v1.0.12
   Compiling libc v0.2.155
   Compiling cfg-if v1.0.0
   Compiling serde v1.0.203
warning: unused variable: 'ctx'
  --> src/engine/mod.rs:48:9
   |
48 |     let ctx = Runtime::new();
   |         ^^^ help: if this is intentional, prefix it with an underscore: '_ctx'
   |
   = note: '#[warn(unused_variables)]' on by default

    Finished dev [unoptimized + debuginfo] target(s) in 42.17s
     Running 'target/debug/core'
[INFO] engine started on 127.0.0.1:9000
[INFO] workers = 4, queue = 1024, mode = "stream"
[ OK ] ready in 118ms
`
  },
  {
    name: "train.py",
    text: String.raw`
2026-10-06 21:14:02 INFO  torch: using device cuda:0 (NVIDIA RTX 4090, 24564 MiB)
2026-10-06 21:14:03 INFO  dataset: 184230 samples, vocab = 49152
2026-10-06 21:14:04 INFO  model: params = 7.24B, dtype = bfloat16
2026-10-06 21:14:09 INFO  step     0 | loss 9.8341 | lr 3.00e-04 | 1.82 it/s
2026-10-06 21:14:41 INFO  step   100 | loss 6.1207 | lr 2.98e-04 | 3.11 it/s
2026-10-06 21:15:13 INFO  step   200 | loss 4.7712 | lr 2.94e-04 | 3.14 it/s
2026-10-06 21:15:45 WARN  grad_norm 12.4 > clip 1.0 — clipping applied
2026-10-06 21:15:45 INFO  step   300 | loss 3.9088 | lr 2.88e-04 | 3.12 it/s
2026-10-06 21:16:17 INFO  checkpoint saved -> ./ckpt/step_400.pt (13.8 GB)
2026-10-06 21:16:18 INFO  eval: ppl 18.42 | acc 0.614 | f1 0.587
`
  },
  {
    name: "nginx",
    text: String.raw`
2026-10-06T21:14:01+03:00 [notice] 1#1: using the "epoll" event method
2026-10-06T21:14:01+03:00 [notice] 1#1: nginx/1.27.0
2026-10-06T21:14:01+03:00 [notice] 1#1: OS: Linux 6.9.7-arch1-1
2026-10-06T21:14:01+03:00 [notice] 1#1: start worker processes
10.0.0.14 - - [06/Oct/2026:21:14:22 +0300] "GET /api/v1/health HTTP/1.1" 200 42 "-" "curl/8.8.0"
10.0.0.51 - - [06/Oct/2026:21:14:23 +0300] "POST /api/v1/infer HTTP/1.1" 200 1184 "-" "python-requests/2.32"
10.0.0.77 - - [06/Oct/2026:21:14:31 +0300] "GET /static/app.js HTTP/1.1" 304 0 "https://artem.grachev.dev/" "Mozilla/5.0"
ERROR 10.0.0.91 - - [06/Oct/2026:21:14:44 +0300] "POST /api/v1/infer HTTP/1.1" 502 157 "-" "python-requests/2.32"
upstream timed out (110: Connection timed out) while reading response header from upstream
10.0.0.14 - - [06/Oct/2026:21:14:59 +0300] "GET /api/v1/health HTTP/1.1" 200 42 "-" "curl/8.8.0"
`
  }
];