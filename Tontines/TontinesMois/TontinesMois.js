document.addEventListener('DOMContentLoaded', () => {
    const startDateInput = document.getElementById('startDate');
    const durationInput = document.getElementById('duration');
    const unitSelect = document.getElementById('unit');
    const endDateInput = document.getElementById('endDate');

    // Fonction pour calculer la date finale
    function calculateEndDate() {
        const startDateValue = startDateInput.value;
        const duration = parseInt(durationInput.value, 10);
        const unit = unitSelect.value;

        if (!startDateValue || isNaN(duration)) {
            endDateInput.value = 'Veuillez entrer une date de début et une durée valide.';
            return;
        }

        const startDate = new Date(startDateValue);

        switch (unit) {
            case 'days':
                startDate.setDate(startDate.getDate() + duration);
                break;
            case 'weeks':
                startDate.setDate(startDate.getDate() + duration * 7);
                break;
            case 'years':
                startDate.setFullYear(startDate.getFullYear() + duration);
                break;
            case'month':
                startDate.setMonth(startDate.getMonth()+duration)
        }

        // Met à jour le champ de la date finale
        endDateInput.value = startDate.toISOString().split('T')[0];
    }

    // Ajout des écouteurs d'événements pour recalculer automatiquement
    startDateInput.addEventListener('input', calculateEndDate);
    durationInput.addEventListener('input', calculateEndDate);
    unitSelect.addEventListener('change', calculateEndDate);
});