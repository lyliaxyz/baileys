const major = parseInt(process.versions.node.split('.')[0], 10)
if (major < 20) {
console.error(
`\nVersi Nodejs Tidak Mendukung \n` +
`Working Nodejs : v20+\n` +
`Versi Nodejs Saat ini: v${process.versions.node}\n\n` +
`Ayo Upgrade Agar Mendapatkan Fitur & Module Terbaru\n`
)
process.exit(1)
}
