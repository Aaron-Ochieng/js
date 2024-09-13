async function queryServers(servername, q) {
    var url = '/' + servername + '?q=' + q;
    var backupurl = '/' + servername + '_backup?q=' + q;
    const req1 = getJSON(url);
    const req2 = getJSON(backupurl);
    const res = await Promise.race([req1, req2]);
    return res;
}

async function gougleSearch (q)  {
    var timeout = new Promise((resolve) =>
        setTimeout(resolve, 80, Error('timeout'))
    );
    var web = queryServers('web', q),
        image = queryServers('image', q),
        video = queryServers('video', q);

    const res = await Promise.race([timeout, Promise.all([web, image, video])]);
    if (res instanceof Error) {
        throw res;
    }
    return { image: res[1], video: res[2], web: res[0] };
}