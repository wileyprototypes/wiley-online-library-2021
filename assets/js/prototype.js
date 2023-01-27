$(document).ready(function () {
	$('#example-table-paginated').DataTable({
		scrollX: true,		
        lengthMenu: [[25, 50, -1], [25, 50, "All"]]
	});
	$('#example-table-scrolling').DataTable({
		scrollX: true,
		scrollY: '50vh',
		scrollCollapse: true,
		paging: false
	});
});