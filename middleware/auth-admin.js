export default async function({$auth, redirect, store}) {
    let user = $auth.state.user;
    if(user && user.admin) {
        // let the user in
    } else {
        //redirect them
        store.dispatch('snackbar/setSnackbar', {color: 'error', text: 'You must be lgged in as admin'})
        redirect('/')
    }
}