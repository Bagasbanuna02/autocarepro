import {
  Container,
  Stack,
  Title,
  Text,
  Grid,
  Card,
  Group,
  TextInput,
  Textarea,
  Button,
} from "@mantine/core";
import { IconPhone, IconMapPin, IconMail } from "@tabler/icons-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 16px",
        background: "var(--mantine-color-gray-0)",
      }}
    >
      <Container size="lg">
        <Stack align="center" mb={60} gap="xs">
          <Title order={2} style={{ fontSize: "2rem", fontWeight: 800, color: "var(--mantine-color-blue-6)" }}>
            Dapatkan Estimasi Gratis Hari Ini
          </Title>
          <Text size="lg" c="dimmed" ta="center" maw={650}>
            Hubungi tim kami untuk estimasi gratis dan rasakan perbedaan
            kualitas layanan <strong>AutoCare Pro</strong>.
          </Text>
        </Stack>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card withBorder shadow="md" padding="xl" radius="lg">
              <Title order={4} mb="md">
                Informasi Kontak
              </Title>
              <Stack gap="sm">
                <Group>
                  <IconPhone size={20} color="var(--mantine-color-blue-6)" />
                  <Text fw={500}>(555) 123-4567</Text>
                </Group>
                <Group>
                  <IconMapPin size={20} color="var(--mantine-color-blue-6)" />
                  <Text fw={500}>Jl. Utama No. 123, Jakarta</Text>
                </Group>
                <Group>
                  <IconMail size={20} color="var(--mantine-color-blue-6)" />
                  <Text fw={500}>info@autocarepro.com</Text>
                </Group>
              </Stack>

              <Stack mt="lg" gap={4}>
                <Text fw={600}>Jam Operasional</Text>
                <Text c="dimmed">Senin - Jumat: 08:00 - 18:00</Text>
                <Text c="dimmed">Sabtu: 08:00 - 16:00</Text>
                <Text c="dimmed">Minggu: Tutup</Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card withBorder shadow="md" padding="xl" radius="lg">
              <Title order={4} mb="md">
                Minta Estimasi Gratis
              </Title>
              <Stack gap="md">
                <Group grow>
                  <TextInput
                    label="Nama"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                  <TextInput
                    label="Telepon"
                    placeholder="Masukkan nomor telepon Anda"
                    required
                  />
                </Group>
                <TextInput
                  label="Email"
                  placeholder="email.anda@contoh.com"
                  type="email"
                  required
                />
                <Textarea
                  label="Kendaraan & Layanan yang Dibutuhkan"
                  placeholder="Ceritakan detail kendaraan dan layanan yang Anda perlukan..."
                  minRows={4}
                  required
                />
                <Button
                  size="md"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: "blue", to: "cyan" }}
                >
                  Kirim Permintaan Estimasi
                </Button>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
