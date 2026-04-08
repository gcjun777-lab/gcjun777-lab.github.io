$ErrorActionPreference = "Stop"

$repo = "gcjun777-lab/gcjun777-lab.github.io"
$branch = "main"
$files = @(
  "index.html",
  "script.js",
  "styles.css",
  "site-data.json"
)

function Get-Token {
  if ($env:GITHUB_TOKEN) {
    return $env:GITHUB_TOKEN
  }

  $secure = Read-Host "Enter GitHub PAT (requires repository contents write access)" -AsSecureString
  $bstr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
  try {
    return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($bstr)
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
  }
}

function To-Base64Utf8([string]$content) {
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($content)
  return [Convert]::ToBase64String($bytes)
}

function Invoke-GitHubJson {
  param(
    [string]$Method,
    [string]$Uri,
    [hashtable]$Headers,
    [object]$Body
  )

  if ($null -ne $Body) {
    return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $Headers -Body ($Body | ConvertTo-Json -Depth 100) -ContentType "application/json; charset=utf-8"
  }

  return Invoke-RestMethod -Method $Method -Uri $Uri -Headers $Headers
}

$token = Get-Token
if ([string]::IsNullOrWhiteSpace($token)) {
  throw "GitHub token was not provided."
}

$headers = @{
  Authorization = "Bearer $token"
  Accept        = "application/vnd.github+json"
  "User-Agent"  = "Codex-Publish-Script"
}

foreach ($file in $files) {
  if (-not (Test-Path -LiteralPath $file)) {
    throw "Missing file: $file"
  }

  $uri = "https://api.github.com/repos/$repo/contents/$file"
  $sha = $null

  try {
    $existing = Invoke-GitHubJson -Method "GET" -Uri "$uri?ref=$branch" -Headers $headers -Body $null
    $sha = $existing.sha
  }
  catch {
    $status = $_.Exception.Response.StatusCode.value__
    if ($status -ne 404) {
      throw
    }
  }

  $content = Get-Content -LiteralPath $file -Raw
  $payload = @{
    message = "Update $file via publish.ps1"
    content = To-Base64Utf8 $content
    branch  = $branch
  }

  if ($sha) {
    $payload.sha = $sha
  }

  Invoke-GitHubJson -Method "PUT" -Uri $uri -Headers $headers -Body $payload | Out-Null
  Write-Host "Uploaded $file"
}

Write-Host ""
Write-Host "All files uploaded. GitHub Pages usually updates within 1-3 minutes."
